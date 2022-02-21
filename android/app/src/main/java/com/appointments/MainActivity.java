package com.appointments;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "appointments";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) { // Added to React Navivation
    super.onCreate(null);
  }
}
