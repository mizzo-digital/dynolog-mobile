import { useRef, useState, useCallback } from 'react';

enum ASSYNC_STATUS {
  LOADING = 'LOADING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED',
}

type AsyncStatus = 'LOADING' | 'RESOLVED' | 'REJECTED';

type Statuses = {
  [key: string]: AsyncStatus;
};

type Results = {
  [key: string]: unknown;
};

type Errors = {
  [key: string]: unknown;
};

export const useAsync = () => {
  const [statuses, setStatuses] = useState<Statuses>({});

  const results = useRef<Results>({});
  const errors = useRef<Errors>({});
  const status = useRef<Statuses>({});

  const setResult = <ResultType>(key: string, newResult: ResultType) => {
    results.current = {
      ...results.current,
      [key]: newResult,
    };
  };

  const setError = (key: string, newError: unknown) => {
    errors.current = {
      ...errors.current,
      [key]: newError,
    };
  };

  const setStatus = (key: string, newStatus: AsyncStatus) => {
    status.current = {
      ...status.current,
      [key]: newStatus,
    };

    setStatuses(prevStatuses => ({
      ...prevStatuses,
      [key]: newStatus,
    }));
  };

  const resetCache = useCallback((key: string) => {
    setResult(key, null);
    setError(key, null);
  }, []);

  const getResponse = <ResponseType>(key: string) => {
    return {
      data: (results.current[key] as ResponseType) || null,
      error: errors.current[key] || null,
      status: status.current[key],
    };
  };

  const runAsync = useCallback(
    async <ResponseType>(asyncKey: string, promise: Promise<ResponseType>) => {
      try {
        resetCache(asyncKey);
        setStatus(asyncKey, ASSYNC_STATUS.LOADING);

        const response = await promise;

        setResult(asyncKey, response);
        setStatus(asyncKey, ASSYNC_STATUS.RESOLVED);
      } catch (error) {
        setError(asyncKey, error);
        setStatus(asyncKey, ASSYNC_STATUS.REJECTED);
      }

      return getResponse<ResponseType>(asyncKey);
    },
    [resetCache],
  );

  return {
    statuses,
    runAsync,
    ASSYNC_STATUS,
  };
};
