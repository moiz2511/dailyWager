import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";
import { Fontisto } from "@expo/vector-icons";

import Home from "../screens/Home";

import Fhome from "../screens/femaleWager/Fhome";
import FnewWager from "../screens/femaleWager/FnewWager";
import FpayWager from "../screens/femaleWager/FpayWager";
import FdeleteWager from "../screens/femaleWager/FdeleteWager";
import FseePayment from "../screens/femaleWager/FseePayment";
import FmarkAttendance from "../screens/femaleWager/FmarkAttendance";
import PayFurther from "../screens/femaleWager/PayFurther";

import Mhome from "../screens/maleWager/Mhome";
import MnewWager from "../screens/maleWager/MnewWager";
import MpayWager from "../screens/maleWager/MpayWager";
import MdeleteWager from "../screens/maleWager/MdeleteWager";
import MseePayment from "../screens/maleWager/MseePayment";
import MmarkAttendance from "../screens/maleWager/MmarkAttendance";

import Ehome from "../screens/employees/Ehome";
import EnewEmployee from "../screens/employees/EnewEmployee";
import EpayWager from "../screens/employees/EpayWager";
import EdeleteWager from "../screens/employees/EdeleteWager";
import EseePayment from "../screens/employees/EseePayment";

import Dhome from "../screens/Diary/Dhome";

const FemaleNavigator = createStackNavigator(
  {
    FhomePage: Fhome,
    FnewWagerPage: FnewWager,
    FpayWagerPage: FpayWager,
    FdeleteWagerPage: FdeleteWager,
    FseePaymentPage: FseePayment,
    FattendancePage: FmarkAttendance,
    PayDetails: PayFurther,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const MaleNavigator = createStackNavigator(
  {
    MhomePage: Mhome,
    MnewWagerPage: MnewWager,
    MpayWagerPage: MpayWager,
    MdeleteWagerPage: MdeleteWager,
    MseePaymentPage: MseePayment,
    MattendancePage: MmarkAttendance,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const EmployeeNavigator = createStackNavigator(
  {
    EhomePage: Ehome,
    EnewEmployeePage: EnewEmployee,
    EpayWagerPage: EpayWager,
    EdeleteWagerPage: EdeleteWager,
    EseePaymentPage: EseePayment,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const DiaryNavigator = createStackNavigator(
  {
    DhomePage: Dhome,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const centralNavigator = createStackNavigator(
  {
    HomePage: Home,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: centralNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Fontisto name="home" size={24} color={tabInfo.tintColor} />;
        },
      },
    },

    Female: {
      screen: FemaleNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Fontisto name="female" size={24} color={tabInfo.tintColor} />;
        },
      },
    },

    Male: {
      screen: MaleNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Fontisto name="male" size={24} color={tabInfo.tintColor} />;
        },
      },
    },
    Employees: {
      screen: EmployeeNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Fontisto name="persons" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Diary: {
      screen: DiaryNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Fontisto name="onenote" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(MainNavigator);
