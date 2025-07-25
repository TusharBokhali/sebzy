import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, Fonts} from '../utils/Theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RentManagement() {
  const [ActiveStatus, setActiveStatu] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TopManagtament}>
        <Text style={styles.TitleText}>Rent Management</Text>
        <Text style={styles.NormalText}>
          Track and manage tenant rent payments efficiently.
        </Text>
      </TouchableOpacity>

      <View style={styles.Flex}>
        <TouchableOpacity
          style={[styles.smallBTN, {backgroundColor: Colors.WHITEDARK}]}>
          <FontAwesome name="refresh" size={RFValue(18)} color={Colors.BLACK} />
          <Text style={[styles.NormalText, {color: Colors.BACKDROP}]}>
            Refresh
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.smallBTN, {backgroundColor: Colors.BLUELITE}]}>
          <AntDesign name="plus" size={RFValue(18)} color={'#FFF'} />
          <Text style={styles.NormalText}>Add New Rent</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Search}>
        <View style={{width: '10%'}}>
          <FontAwesome name="search" size={RFValue(18)} color={Colors.GRAY44} />
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Search by tenant, room, or month..."
          placeholderTextColor={Colors.GRAY44}
        />
      </View>

      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 12,
        }}>
        <TouchableOpacity
          style={[
            styles.smallBTN,
            {
              backgroundColor:
                ActiveStatus == 0 ? Colors.BLUELITE : Colors.WHITEDARK,
              padding: 0,
            },
          ]}
          onPress={() => setActiveStatu(0)}>
          <Ionicons
            name="time"
            size={RFValue(18)}
            color={ActiveStatus == 0 ? Colors.WHITEDARK : Colors.BLUELITE}
          />
          <Text
            style={[
              styles.BoxTExt,
              {color: ActiveStatus == 0 ? Colors.WHITEDARK : Colors.BLUELITE},
            ]}>
            Overdue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.smallBTN,
            {
              backgroundColor:
                ActiveStatus == 1 ? Colors.BLUELITE : Colors.WHITEDARK,
              padding: 0,
            },
          ]}
          onPress={() => setActiveStatu(1)}>
          <Ionicons
            name="document-text-outline"
            size={RFValue(18)}
            color={ActiveStatus == 1 ? Colors.WHITEDARK : Colors.BLUELITE}
          />
          <Text
            style={[
              styles.BoxTExt,
              {color: ActiveStatus == 1 ? Colors.WHITEDARK : Colors.BLUELITE},
            ]}>
            Rent Records
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.smallBTN,
            {
              backgroundColor:
                ActiveStatus == 2 ? Colors.BLUELITE : Colors.WHITEDARK,
              padding: 0,
            },
          ]}
          onPress={() => setActiveStatu(2)}>
          <Ionicons
            name="list-outline"
            size={RFValue(18)}
            color={ActiveStatus == 2 ? Colors.WHITEDARK : Colors.BLUELITE}
          />
          <Text
            style={[
              styles.BoxTExt,
              {color: ActiveStatus == 2 ? Colors.WHITEDARK : Colors.BLUELITE},
            ]}>
            All Rents
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.DataBox}>
        <Text style={styles.NoData}>
          {ActiveStatus == 0
            ? 'No overdue rents.'
            : (ActiveStatus == 1 || ActiveStatus == 2) &&
              'No rent records found.'}
        </Text>
      </View>

      <View style={styles.LastBox}>
        <Text style={styles.TitleText}>Bulk Create Rent Records</Text>
        <Text
          style={[
            styles.NormalText,
            {fontSize: RFValue(12), color: Colors.GRAY44, marginVertical: 12},
          ]}>
          Use this section to create rent records for all active tenants for a
          specific month and year. This is useful for generating rent records in
          advance.
        </Text>
        <TouchableOpacity style={styles.LastBTN}>
          <AntDesign name="plus" size={RFValue(18)} color={Colors.WHITEDARK} />
          <Text style={styles.NormalText}>
            Generate Next Month's Rent Records
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LastBTN}>
          <AntDesign name="plus" size={RFValue(18)} color={Colors.WHITEDARK} />
          <Text style={styles.NormalText}>Create Individual Rent Record</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITEDARK,
  },
  TopManagtament: {
    width: '95%',
    marginHorizontal: 'auto',
    backgroundColor: Colors.BLUELITE,
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(15),
    borderRadius: 7,
    marginTop: 10,
  },
  TitleText: {
    fontWeight: '600',
    color: Colors.WHITEDARK,
    fontSize: RFValue(18),
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    marginBottom: 5,
  },
  NormalText: {
    fontSize: RFValue(13),
    fontWeight: '500',
    color: Colors.WHITEDARK,
  },
  Search: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 'auto',
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 7,
    paddingHorizontal: 15,
    marginTop: 15,
    backgroundColor: Colors.WHITEDARK,
  },
  TextInput: {
    width: '90%',
    color: Colors.BLACK,
  },
  smallBTN: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: Colors.GRAY,
    borderRadius: 5,
  },
  Flex: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    marginTop: 12,
    gap: 10,
  },
  NormalTextBtn: {
    fontWeight: '500',
    fontSize: RFValue(14),
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  BoxTExt: {
    fontSize: RFValue(12),
  },
  DataBox: {
    width: '95%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 'auto',
    backgroundColor: Colors.WHITEDARK,
    marginTop: 15,
    borderRadius: 7,
    minHeight: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  NoData: {
    color: Colors.GRAY44,
    fontWeight: '400',
    fontSize: RFValue(13),
  },
  LastBox: {
    width: '95%',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.WHITEDARK,
    borderRadius: 7,
    marginTop: 15,
  },
  LastBTN: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    backgroundColor: Colors.BLUELITE,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 7,
    marginVertical: 10,
  },
});

// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   TextInput,
// } from 'react-native';
// import React, {useState} from 'react';
// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
// import {Colors, Fonts} from '../utils/Theme';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function RentManagement() {
//   const [ActiveStatus, setActiveStatu] = useState(0);
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.TopManagtament}>
//         <Text style={styles.TitleText}>Rent Management</Text>
//         <Text style={styles.NormalText}>
//           Track and manage tenant rent payments efficiently.
//         </Text>
//       </TouchableOpacity>

//       <View style={styles.Flex}>
//         <TouchableOpacity style={styles.smallBTN}>
//           <FontAwesome name="refresh" size={RFValue(18)} color={'black'} />
//           <Text style={[styles.NormalTextBtn]}>Refresh</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.smallBTN, {backgroundColor: '#3579f3'}]}>
//           <AntDesign name="plus" size={RFValue(18)} color={Colors.WHITE} />
//           <Text style={[styles.NormalTextBtn, {color: Colors.WHITE}]}>
//             Add New Rent
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.Search}>
//         <View style={{width: '10%'}}>
//           <FontAwesome name="search" size={RFValue(18)} color={'#9ca3af'} />
//         </View>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Search by tenant, room, or month..."
//           placeholderTextColor={Colors.PRIMARY_COLOR_LIGHT}
//         />
//       </View>
// <View style={[styles.Flex, {justifyContent: 'space-between'}]}>
//   <TouchableOpacity
//     style={[
//       styles.smallBTN,
//       {
//         backgroundColor: ActiveStatus == 0 ? Colors.BLUELITE : Colors.WHITEDARK,
//         padding: 0,
//       },
//     ]}
//     onPress={() => setActiveStatu(0)}>
//     <Ionicons
//       name="time"
//       size={RFValue(18)}
//       color={ActiveStatus == 0 ? Colors.WHITE :  Colors.BLUELITE}
//     />
//     <Text
//       style={[
//         styles.BoxTExt,
//         {color: ActiveStatus == 0 ? Colors.WHITE :  Colors.BLUELITE},
//       ]}>
//       Overdue
//     </Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//     style={[
//       styles.smallBTN,
//       {
//         backgroundColor: ActiveStatus == 1 ? Colors.BLUELITE : Colors.WHITEDARK,
//         padding: 0,
//       },
//     ]}
//     onPress={() => setActiveStatu(1)}>
//     <Image />
//     <Text
//       style={[
//         styles.BoxTExt,
//         {color: ActiveStatus == 1 ? Colors.WHITE :  Colors.BLUELITE},
//       ]}>
//       Rent Records
//     </Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//     style={[
//       styles.smallBTN,
//       {
//         backgroundColor: ActiveStatus == 2 ? Colors.BLUELITE : Colors.WHITEDARK,
//         padding: 0,
//       },
//     ]}
//     onPress={() => setActiveStatu(2)}>
//     <Image />
//     <Text
//       style={[
//         styles.BoxTExt,
//         {color: ActiveStatus == 2 ? Colors.WHITE :  Colors.BLUELITE},
//       ]}>
//       All Rents
//     </Text>
//   </TouchableOpacity>
// </View>

//       <View style={styles.DataBox}>
//         <Text style={styles.NoData}>
//           {ActiveStatus == 0
//             ? 'No overdue rents.'
//             : (ActiveStatus == 1 || ActiveStatus == 2) &&
//               'No rent records found.'}
//         </Text>
//       </View>
//       <View style={styles.LastBox}>
//         <Text style={[styles.TitleText, {color: 'black'}]}>
//           Bulk Create Rent Records
//         </Text>
//         <Text
//           style={[styles.NormalText, {fontSize: RFValue(12), color: 'gray'}]}>
//           Use this section to create rent records for all active tenants for a
//           specific month and year. This is useful for generating rent records in
//           advance.
//         </Text>
//         <TouchableOpacity style={styles.LastBTN}>
//           <AntDesign name="plus" size={RFValue(18)} color={Colors.WHITE} />
//           <Text style={[styles.NormalText, {color: 'white'}]}>
//             Generate Next Month's Rent Records
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.LastBTN}>
//           <AntDesign name="plus" size={RFValue(18)} color={Colors.WHITE} />
//           <Text style={[styles.NormalText, {color: 'white'}]}>
//             Create Individual Rent Record
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   TopManagtament: {
//     width: '95%',
//     marginHorizontal: 'auto',
//     backgroundColor: '#2d56e1',
//     paddingVertical: RFValue(15),
//     paddingHorizontal: RFValue(15),
//     borderRadius: 7,
//     marginTop: 10,
//   },
//   TitleText: {
//     fontWeight: '600',
//     color: Colors.WHITE,
//     fontSize: RFValue(18),
//     fontFamily: Fonts.POPPINS_SEMIBOLD,
//     marginBottom: 5,
//   },
//   NormalText: {
//     fontSize: RFValue(13),
//     fontWeight: '500',
//     color: '#a7e1fe',
//   },
//   Search: {
//     width: '95%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 'auto',
//     borderWidth: 1,
//     borderColor: Colors.GRAY,
//     borderRadius: 7,
//     paddingHorizontal: 15,
//     marginTop: 15,
//   },
//   TextInput: {
//     width: '90%',
//     color: Colors.PRIMARY_COLOR_LIGHT,
//   },
//   smallBTN: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     backgroundColor: Colors.GRAY,
//     borderRadius: 5,
//   },
//   Flex: {
//     flexDirection: 'row',
//     alignSelf: 'flex-end',
//     paddingHorizontal: 15,
//     marginTop: 12,
//     gap: 10,
//   },
//   NormalTextBtn: {
//     fontWeight: '500',
//     fontSize: RFValue(14),
//     fontFamily: Fonts.POPPINS_SEMIBOLD,
//   },
//   BoxTExt: {
//     fontSize: RFValue(12),
//   },
//   DataBox: {
//     width: '95%',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     marginHorizontal: 'auto',
//     backgroundColor: Colors.WHITE,
//     marginTop: 15,
//     borderRadius: 7,
//     minHeight: RFValue(50),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   NoData: {
//     color: 'gray',
//     fontWeight: '400',
//     fontSize: RFValue(13),
//   },
//   LastBox: {
//     width: '95%',
//     marginHorizontal: 'auto',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     backgroundColor: '#f5f3ff',
//     borderRadius: 7,
//     marginTop: 15,
//   },
//   LastBTN: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 5,
//     backgroundColor: '#794ded',
//     paddingVertical: 15,
//     paddingHorizontal: 5,
//     borderRadius: 7,
//     marginVertical: 10,
//   },
// });
