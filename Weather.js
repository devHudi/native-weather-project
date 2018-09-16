import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "짜증나게 비가 오네요",
    subtitle: "더 많은 정보를 알고싶으면 창 밖을 보세요",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "와우 맑아요",
    subtitle: "방에만 박혀있지 말고 좀 나가서 세상구경좀 하세요",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "당신 집안에 천둥번개가 칩니다",
    subtitle: "음.. 사실 밖에서 쳐요",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "구름꼈네",
    subtitle: "더럽게 지루하죠?",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "와 눈온당",
    subtitle: "Do you want to build a snowman?",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "이슬비가 옵니다",
    subtitle: "근데 이슬비가 뭐지?",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "악 안개꼈다",
    subtitle: "아무것도 안보여용",
    icon: "weather-fog"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Mist",
    subtitle: "너가 안경 안낄때랑 비슷하네요",
    icon: "weather-fog"
  }
};

const Weather = ({ temp, weatherName }) => {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}> {temp} °C </Text>
      </View>

      <View style={styles.lower}>
        <Text style={styles.title}> {weatherCases[weatherName].title} </Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTyeps = {
  temp: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 48,
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    color: "white",
    marginBottom: 24
  }
});

export default Weather;
