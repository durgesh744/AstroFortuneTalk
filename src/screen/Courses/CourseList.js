import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import MyStatusBar from '../../component/common/MyStatusBar';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors, Fonts } from '../../assets/style';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Screen';
import axios from 'axios';
import {
  api_url,
  course_list,
  provider_img_url,
} from '../../config/Constants';
import CourseTabItem from '../../component/ui/Courses/CourseTabItem';

const CourseList = ({ navigation }) => {
  const [state, setState] = useState({
    visible: false,
    courseData: null,
    isLoading: false,
  });

  useEffect(() => {
    get_courses_data();
  }, []);

  const get_courses_data = async () => {
    // updateState({ isLoading: false });
    // await axios({
    //   method: 'get',
    //   url: api_url + course_list,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // })
    //   .then(res => {
    //     console.log(res.data, "res.data")
    //     updateState({ isLoading: false });
    //     if (res.data.status == '200') {
    //       updateState({ courseData: res.data.data });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     updateState({ isLoading: false });
    //   });
  };

  const updateState = data => {
    setState(prevData => {
      const newData = { ...prevData, ...data };
      return newData;
    });
  };

  const { visible, isLoading } = state;

  const courseData = [
    {
      name: "Tarot Card Reading"
    },
    {
      name: "Vedic Numerology"
    },
    {
      name: "Lo-SHO Grid Numerology"
    },
    {
      name: "Vastu Shastra"
    },
  ]

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryDark}
        barStyle={'light-content'}
      />
      {myHeader()}
      <CourseTabItem />
      <View style={{ flex: 1 }}>
        <FlatList ListHeaderComponent={<>{courseList()}</>} />
      </View>
    </View>
  );

  function myHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          borderBottomWidth: 0.8,
          borderBottomColor: Colors.grayLight,
          zIndex: 50,
          backgroundColor: Colors.white
        }}>
        <View
          style={{
            width: SCREEN_WIDTH * 0.1,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="leftcircleo"
              color={Colors.primaryDark}
              size={26}
              style={{ alignSelf: 'center' }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: SCREEN_WIDTH * 0.65,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.primaryDark,
              fontWeight: '400',
              fontFamily: 'Roboto-Medium',
              textAlign: 'center',
            }}>
            Schedule the Course
          </Text>
        </View>
        <View
          style={{
            width: SCREEN_WIDTH * 0.15,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Menu
            visible={visible}
            animationDuration={100}
            style={{
              width: SCREEN_WIDTH * 0.5,
              position: 'absolute',
              top: SCREEN_WIDTH * 0.15,
            }}
            anchor={
              <Entypo
                onPress={() => updateState({ visible: true })}
                name="dots-three-vertical"
                color={Colors.primaryDark}
                size={20}
                style={{ alignSelf: 'center' }}
              />
            }
            onRequestClose={() => updateState({ visible: false })}>
            <MenuItem onPress={() => navigation.navigate('liveClassCreated')}>
              <Text style={Fonts.gray14RobotoMedium}>Schedule the Course</Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem onPress={() => navigation.navigate('demoClassCreated')}>
              <Text style={Fonts.gray14RobotoMedium}>Demo Class List</Text>
            </MenuItem>
          </Menu>
        </View>
      </View>
    );
  }

  function courseList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.container}
        onPress={() =>
          navigation.navigate('addCourseDetails', {
            headerTitle: item.name + ' Course',
            course_id: item.id,
          })
        }>
        <View style={styles.subContainer}>
          <Image
            source={{ uri: "https://www.acaster.in/wp-content/uploads/2022/04/Astrology-Course.jpg" }}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.textBox}>
            <Text numberOfLines={1} style={{ ...Fonts.gray16RobotoMedium, color: Colors.blackLight }}>
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={{ marginVertical: 10 }}>
        <FlatList
          data={courseData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingVertical: 15 }}
        />
      </View>
    );
  }
};

export default CourseList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: 'transparent',
    marginBottom: 15,
  },
  subContainer: {
    borderRadius: 20,
    backgroundColor: Colors.grayLight,
    borderRadius: SCREEN_WIDTH * 0.04,
    elevation: 5,
    height: SCREEN_HEIGHT * 0.1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    width: '45%',
    height: '100%',
    borderTopRightRadius: SCREEN_WIDTH * 0.04,
    borderBottomRightRadius: SCREEN_WIDTH * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  textBox: {
    width: '55%',
    justifyContent: 'center',
    paddingLeft: SCREEN_WIDTH * 0.02,
  },
});
