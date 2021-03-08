import React from "react";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";

const ProfileBio = ({ handleLogin }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.div_1}>
        <View style={styles.div_2}>
          <View style={styles.div_3} onPress={handleLogin}>
            <Image
              style={styles.image_1}
              source={{
                uri:
                  "https://i.pinimg.com/originals/6b/a2/f5/6ba2f5355309cbec1d57278559dd7b1d.png",
              }}
            />
            <Image
              style={styles.image_2}
              source={{
                uri:
                  "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Dot-More-Vertical-Menu-512.png",
              }}
            />
          </View>
          <View style={styles.div_4}>
            <Text style={styles.text_1}>My Profile</Text>
          </View>
          <View style={styles.div_5}>
            <Image
              style={styles.image_3}
              source={{
                uri: `https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png`,
              }}
            />
            <Text style={styles.text_2}>Anna Alvardo</Text>
            <Text style={styles.text_3}>
              Guildhall School of Music & Drama London, UK
            </Text>
          </View>
          <View style={styles.div_6}>
            <View style={styles.div_7}>
              <View style={styles.div_8}>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.text_4}>Photos</Text>
                  <Text
                    style={{
                      letterSpacing: 1,
                      color: "#263238",
                      fontWeight: 900,
                      textShadow: "1px 0 #263238",
                    }}
                  >
                    456
                  </Text>
                </View>
              </View>
              <View style={styles.div_8}>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.text_4}>Followers</Text>
                  <Text
                    style={{
                      letterSpacing: 1,
                      color: "#263238",
                      fontWeight: 900,
                      textShadow: "1px 0 #263238",
                    }}
                  >
                    456
                  </Text>
                </View>
              </View>
              <View style={styles.div_8}>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.text_4}>Following</Text>
                  <Text
                    style={{
                      letterSpacing: 1,
                      color: "#263238",
                      fontWeight: 900,
                      textShadow: "1px 0 #263238",
                    }}
                  >
                    456
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c5cae9",
  },
  div_1: {
    height: "80%",
    marginTop: "30px",
    marginHorizontal: "auto",
    borderRadius: 20,
    width: "90%",
    backgroundColor: "#ffffff",
  },
  div_2: {
    width: "100%",
    height: 350,
    borderRadius: 20,
    boxShadow: "0 4px 8px 0 #cfd8dc, 0 6px 20px 0 #cfd8dc",
  },
  div_3: {
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 10,
    width: "100%",
  },
  div_4: {
    marginVertical: 10,
    width: "100%",
    height: 30,
  },
  div_5: {
    width: "100%",
    height: 130,
    alignItems: "center",
  },
  div_6: {
    width: "100%",
    height: 100,
    alignItems: "center",
  },
  div_7: {
    width: "70%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  div_8: {
    textAlign: "center",
    alignItems: "center",
    height: 20,
  },
  text_1: {
    marginLeft: 25,
    fontWeight: 900,
    letterSpacing: 2,
    fontSize: 20,
    fontFamily: "Josefin Sans",
    color: "#455a64",
    textShadow: "1px 0 #455a64",
  },
  text_2: {
    marginTop: 15,
    marginBottom: 10,
    fontWeight: 900,
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: "Josefin Sans",
    color: "#455a64",
    textShadow: "1px 0 #455a64",
  },
  text_3: {
    textAlign: "center",
    width: "70%",
    fontWeight: 700,
    fontFamily: "Josefin Sans",
    color: "#b0bec5",
  },
  text_4: {
    // marginVertical: "auto",
    marginHorizontal: "auto",
    fontFamily: "Josefin Sans",
    color: "#b0bec5",
  },
  span_1: {
    letterSpacing: 1,
    marginLeft: 15,
    color: "#263238",
    fontWeight: 900,
    textShadow: "1px 0 #263238",
  },
  image_1: {
    marginLeft: 20,
    height: 15,
    width: 15,
    backgroundColor: "#ffffff",
  },
  image_2: {
    marginRight: 20,
    height: 15,
    width: 15,
    backgroundColor: "#ffffff",
  },
  image_3: { width: 50, height: 50, marginTop: 10 },
});
