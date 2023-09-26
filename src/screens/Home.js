import React from "react";
import { View, Linking, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source="https://www.calxa.com/wp-content/uploads/2018/05/Report-CashflowForecastChart.png"
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
    </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
      

        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
             Rangkuman Bulan Ini
            </Text>

             <Text style={{ textAlign: "center",color: "green" }}>
                Pemasukan : "8000"
             </Text>

             <Text style={{ textAlign: "center",color: "red" }}>
                Pengeluaran : "7000"
             </Text>

            <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "success" : "warning"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
              style={{
                marginTop: 15,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '80%',
    backgroundColor: '#0553',
  },
});
