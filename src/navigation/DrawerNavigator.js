
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { FadeInLeft, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { moderateScale, screenHeight, screenWidth } from '../utils/Metrics';
import { Images } from '../assets/image/image';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Colors = {
    BACKGROUND: '#f5f5ef',
    PRIMARY: '#046d92',
    ALERT: '#a6252c',
    CARD: '#ffffff',
    SOFT_CARD: '#f1f2f2',
    WHITE: '#ffffff',
    GRAY85: '#d3d3d3',
}

const Fonts = {
    POPPINS_SEMIBOLD: 'Poppins-SemiBold',
}

export default function DrawerView({
    translateX,
    currentscreen,
    setCurrentScreen,
    setOpen
}) {
    const AnimatedCard = Animated.createAnimatedComponent(TouchableOpacity);
    const [MyWidth, setMyWidth] = useState(Dimensions.get('window').width);
    const { navigate } = useNavigation();

    const draweropenstyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        }
    }, [])

    const NavigationNextScreen = (screen) => {
        setCurrentScreen(screen);
        setOpen(false)
        translateX.value = withTiming(-MyWidth * 0.8, { duration: 500 })
    }

    return (
        <Animated.View style={[styles.container, draweropenstyle]}>
            <View>
                <AnimatedCard
                    entering={FadeInLeft.duration(500).delay(200)}
                    style={styles.HederCenterStyle}
                >
                    <Image
                        style={styles.profileImage}
                        source={Images.SplashScreen}
                    />
                    <View>
                        <Text style={styles.HeaderText}>Sebzy</Text>
                        <Text style={styles.HeaderTextSmall}>PG Management</Text>
                    </View>
                </AnimatedCard>
            </View>

            <AnimatedCard
                entering={FadeInLeft.duration(500).delay(200)}
                style={styles.HederCenterStyle} >
                <Image
                    style={styles.userImage}
                    source={Images.USER}
                />
                <View style={{ marginLeft: moderateScale(8) }}>
                    <Text style={styles.HeaderText}>Johan</Text>
                    <Text style={styles.HeaderTextSmall}>India</Text>
                </View>
            </AnimatedCard>

            {renderMenuItem('Dashboard', currentscreen, Images.USER, NavigationNextScreen)}
            {renderMenuItem('RoomsScreen', currentscreen, Images.ROOMTOTAL, NavigationNextScreen)}
            {renderMenuItem('NewTenants', currentscreen, Images.TENATES, NavigationNextScreen)}
            {renderMenuItem('Rent Management', currentscreen, Images.RENT, NavigationNextScreen)}
            {renderMenuItem('History', currentscreen, Images.History, NavigationNextScreen)}

        </Animated.View >
    )
}

function renderMenuItem(screen, currentscreen, icon, NavigationNextScreen) {
    const isSelected = currentscreen === screen;
    return (
        <View style={[
            styles.menuItemContainer,
            { borderLeftWidth: isSelected ? 5 : 0, borderColor: isSelected ? Colors.PRIMARY : '' }
        ]}>
            {isSelected && <View style={styles.selectedBackground} />}
            <View style={styles.menuItemOverlay}>
                <TouchableOpacity
                    onPress={() => NavigationNextScreen(screen)}
                    style={styles.SelectedStyle}
                >
                    <View style={styles.menuIconContainer}>
                        <Image
                            style={styles.menuIcon}
                            source={icon}
                        />
                    </View>
                    <Text style={styles.HeaderText}>{screen}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(87),
        backgroundColor: Colors.BACKGROUND,
        position: 'absolute',
        bottom: 0,
        zIndex: 500,
    },
    HederCenterStyle: {
        width: "90%",
        height: 60,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(6),
        padding: moderateScale(2),
        backgroundColor: Colors.SOFT_CARD,
        alignSelf: 'center',
        marginVertical: moderateScale(10),
        borderRadius: moderateScale(16),
        borderWidth: 1,
        borderColor: Colors.PRIMARY
    },
    HeaderText: {
        fontSize: moderateScale(18),
        fontFamily: Fonts.POPPINS_SEMIBOLD,
        color: Colors.PRIMARY,
        fontWeight: '700',
        zIndex: 1
    },
    HeaderTextSmall: {
        fontSize: moderateScale(14),
        fontFamily: Fonts.POPPINS_SEMIBOLD,
        color: Colors.PRIMARY,
    },
    profileImage: {
        width: moderateScale(42),
        height: moderateScale(42),
        borderRadius: moderateScale(8),
    },
    userImage: {
        width: moderateScale(36),
        height: moderateScale(36),
        backgroundColor: Colors.CARD,
        borderRadius: moderateScale(30),
    },
    menuItemContainer: {
        width: '90%',
        height: 60,
        alignSelf: 'center',
        borderRadius: 12,
        overflow: 'hidden',
    },
    selectedBackground: {
        flex: 1,
        backgroundColor: Colors.PRIMARY + '33'
    },
    menuItemOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
    },
    SelectedStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: moderateScale(20),
        marginVertical: moderateScale(10),
        borderRadius: moderateScale(16),
        opacity: moderateScale(0.9)
    },
    menuIconContainer: {
        width: moderateScale(40),
        height: moderateScale(40),
        backgroundColor: Colors.SOFT_CARD,
        borderRadius: moderateScale(12),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: moderateScale(10),
    },
    menuIcon: {
        width: moderateScale(26),
        height: moderateScale(26),
        tintColor: Colors.PRIMARY
    }
})
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Alert } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Animated, { FadeInLeft, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
// import { moderateScale, screenHeight, screenWidth } from '../utils/Metrics';
// import { Images } from '../assets/image/image';
// import LinearGradient from 'react-native-linear-gradient';
// import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// import { useNavigation } from '@react-navigation/native';

// const Colors = {
//     BACKGROUND: '#f5f5ef',
//     PRIMARY: '#046d92',
//     ALERT: '#a6252c',
//     CARD: '#ffffff',
//     SOFT_CARD: '#f1f2f2',
//     WHITE: '#ffffff',
//     GRAY85: '#d3d3d3',
// }

// const Fonts = {
//     POPPINS_SEMIBOLD: 'Poppins-SemiBold',
// }

// export default function DrawerView({
//     translateX,
//     currentscreen,
//     setCurrentScreen,
//     setOpen
// }) {
//     const AnimatedCard = Animated.createAnimatedComponent(TouchableOpacity);
//     const [MyWidth, setMyWidth] = useState(Dimensions.get('window').width);
//     const { navigate } = useNavigation();

//     const draweropenstyle = useAnimatedStyle(() => {
//         return {
//             transform: [{ translateX: translateX.value }]
//         }
//     }, [])

//     const NavigationNextScreen = (screen) => {
//         setCurrentScreen(screen);
//         setOpen(false)
//         translateX.value = withTiming(-MyWidth * 0.8, { duration: 500 })
//     }

//     return (
//         <Animated.View style={[styles.container, draweropenstyle]}>
//             <View>
//                 <AnimatedCard
//                     entering={FadeInLeft.duration(500).delay(200)}
//                     style={styles.HederCenterStyle}
//                 >
//                     <Image
//                         style={styles.profileImage}
//                         source={Images.SplashScreen}
//                     />
//                     <View>
//                         <Text style={styles.HeaderText}>Sebzy</Text>
//                         <Text style={styles.HeaderTextSmall}>PG Management</Text>
//                     </View>
//                 </AnimatedCard>
//             </View>

//             <AnimatedCard
//                 entering={FadeInLeft.duration(500).delay(200)}
//                 style={styles.HederCenterStyle} >
//                 <Image
//                     style={styles.userImage}
//                     source={Images.USER}
//                 />
//                 <View style={{ marginLeft: moderateScale(8) }}>
//                     <Text style={styles.HeaderText}>Johan</Text>
//                     <Text style={styles.HeaderTextSmall}>India</Text>
//                 </View>
//             </AnimatedCard>

//             {renderMenuItem('Dashboard', currentscreen, Images.USER, NavigationNextScreen)}
//             {renderMenuItem('RoomsScreen', currentscreen, Images.ROOMTOTAL, NavigationNextScreen)}
//             {renderMenuItem('TenantScreen', currentscreen, Images.TENATES, NavigationNextScreen)}
//             {renderMenuItem('Rent Management', currentscreen, Images.RENT, NavigationNextScreen)}
//             {/* {renderMenuItem('TransactionScreen', currentscreen, Images.THISTORY, NavigationNextScreen)} */}

//         </Animated.View >
//     )
// }

// function renderMenuItem(screen, currentscreen, icon, NavigationNextScreen) {
//     const isSelected = currentscreen === screen;
//     return (
//         <View style={[
//             styles.menuItemContainer,
//             { borderLeftWidth: isSelected ? 5 : 0, borderColor: isSelected ? Colors.PRIMARY : '' }
//         ]}>
//             {isSelected && <View style={styles.selectedBackground} />}
//             <View style={styles.menuItemOverlay}>
//                 <TouchableOpacity
//                     onPress={() => NavigationNextScreen(screen)}
//                     style={styles.SelectedStyle}
//                 >
//                     <View style={styles.menuIconContainer}>
//                         <Image
//                             style={styles.menuIcon}
//                             source={icon}
//                         />
//                     </View>
//                     <Text style={styles.HeaderText}>{screen}</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         width: widthPercentageToDP(80),
//         height: heightPercentageToDP(88),
//         backgroundColor: Colors.BACKGROUND,
//         position: 'absolute',
//         bottom: 0,
//         zIndex: 500,
//     },
//     HederCenterStyle: {
//         width: "90%",
//         height: 60,
//         paddingLeft: 20,
//         flexDirection: 'row',
//         alignItems: 'center',
//         gap: moderateScale(6),
//         padding: moderateScale(2),
//         backgroundColor: Colors.SOFT_CARD,
//         alignSelf: 'center',
//         marginVertical: moderateScale(10),
//         borderRadius: moderateScale(16),
//         borderWidth: 1,
//         borderColor: Colors.PRIMARY
//     },
//     HeaderText: {
//         fontSize: moderateScale(18),
//         fontFamily: Fonts.POPPINS_SEMIBOLD,
//         color: Colors.PRIMARY,
//         fontWeight: '700',
//         zIndex: 1
//     },
//     HeaderTextSmall: {
//         fontSize: moderateScale(14),
//         fontFamily: Fonts.POPPINS_SEMIBOLD,
//         color: Colors.PRIMARY,
//     },
//     profileImage: {
//         width: moderateScale(42),
//         height: moderateScale(42),
//         borderRadius: moderateScale(8),
//     },
//     userImage: {
//         width: moderateScale(36),
//         height: moderateScale(36),
//         backgroundColor: Colors.CARD,
//         borderRadius: moderateScale(30),
//     },
//     menuItemContainer: {
//         width: '90%',
//         height: 60,
//         alignSelf: 'center',
//         borderRadius: 12,
//         overflow: 'hidden',
//     },
//     selectedBackground: {
//         flex: 1,
//         backgroundColor: Colors.PRIMARY + '33'
//     },
//     menuItemOverlay: {
//         ...StyleSheet.absoluteFillObject,
//         justifyContent: 'center',
//     },
//     SelectedStyle: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginHorizontal: moderateScale(20),
//         marginVertical: moderateScale(10),
//         borderRadius: moderateScale(16),
//         opacity: moderateScale(0.9)
//     },
//     menuIconContainer: {
//         width: moderateScale(40),
//         height: moderateScale(40),
//         backgroundColor: Colors.SOFT_CARD,
//         borderRadius: moderateScale(12),
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: moderateScale(10),
//     },
//     menuIcon: {
//         width: moderateScale(26),
//         height: moderateScale(26),
//         tintColor: Colors.PRIMARY
//     }
// })

// // import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Alert } from 'react-native'
// // import React, { useEffect, useState } from 'react'
// // import Animated, { FadeInLeft, FadeInRight, FadeInUp, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
// // import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// // import { moderateScale, screenHeight, screenWidth } from '../utils/Metrics';
// // import { Colors, Fonts } from '../utils/Theme';
// // import { Images } from '../assets/image/image';
// // import LinearGradient from 'react-native-linear-gradient';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
// // import { useNavigation } from '@react-navigation/native';

// // export default function DrawerView({
// //     translateX,
// //     currentscreen,
// //     setCurrentScreen,
// //     setOpen
// // }) {
// //     const AnimatedCard = Animated.createAnimatedComponent(TouchableOpacity);
// //     const [MyWidth, setMyWidth] = useState(Dimensions.get('window').width);
// //     const translateY = useSharedValue(0);
// //     const isOpen = translateX.value === 0
// //     const { navigate } = useNavigation();
// //     const AnimatedLinear = Animated.createAnimatedComponent(LinearGradient)

// //     const draweropenstyle = useAnimatedStyle(() => {
// //         return {
// //             transform: [{
// //                 translateX: translateX.value
// //             }]
// //         }
// //     }, [])
// //     // Alert.alert(String(isOpen));

// //     const navigateAnimation = useAnimatedStyle(() => {
// //         return {
// //             transform: [{
// //                 translateY: translateY.value
// //             }]
// //         }
// //     }, [])

// //     // useEffect(() => {
// //     // }, [currentscreen])



// //     const NavigationNextScreen = (screen) => {
// //         setCurrentScreen(screen);
// //         setOpen(false)
// //         translateX.value = withTiming(-MyWidth * 0.8, { duration: 500 })
// //     }
// //     return (
// //         < >

// //             <Animated.View style={[styles.container, draweropenstyle]}>
// //                 <View
// //                 >
// //                     <AnimatedCard
// //                         entering={FadeInLeft.duration(500).delay(200)}
// //                         style={styles.HederCenterStyle}
// //                     >
// //                         <Image
// //                             style={{
// //                                 width: moderateScale(42),
// //                                 height: moderateScale(42),
// //                                 borderRadius: moderateScale(8),
// //                             }}
// //                             source={Images.SplashScreen}
// //                         />
// //                         <View>
// //                             <Text style={styles.HeaderText}>Sebzy</Text>
// //                             <Text style={styles.HeaderTextSmall}>PG Management</Text>
// //                         </View>
// //                         {/* <TouchableOpacity style={{ marginLeft: moderateScale(10), }} onPress={

// //                             () => translateX.value = withTiming(isOpen ? -MyWidth * 0.8 : 0, { duration: 500 })}>
// //                             <Image
// //                                 style={{
// //                                     width: moderateScale(24),
// //                                     height: moderateScale(24),
// //                                     tintColor: '#fff',
// //                                 }}
// //                                 source={Images.close}
// //                             />
// //                         </TouchableOpacity> */}
// //                     </AnimatedCard>
// //                 </View>


// //                 <AnimatedCard
// //                     entering={FadeInLeft.duration(500).delay(200)}
// //                     style={styles.HederCenterStyle} >
// //                     <Image
// //                         style={{
// //                             width: moderateScale(36),
// //                             height: moderateScale(36),
// //                             backgroundColor: '#FFF',
// //                             borderRadius: moderateScale(30),
// //                         }}
// //                         source={Images.USER}
// //                     />
// //                     <View style={{ marginLeft: moderateScale(8) }}>
// //                         <Text style={[styles.HeaderText]}>Johan</Text>
// //                         <Text style={styles.HeaderTextSmall}>India</Text>
// //                     </View>
// //                 </AnimatedCard>

// //                 <View style={{
// //                     width: '90%',
// //                     height: 60,
// //                     alignSelf: 'center',
// //                     borderRadius: 12,
// //                     overflow: 'hidden',
// //                     borderLeftWidth: currentscreen == 'Dashboard' ? 5 : 0,
// //                     borderColor: currentscreen == 'Dashboard' ? Colors.WHITE : ""
// //                 }}>
// //                     {
// //                         currentscreen == 'Dashboard' &&
// //                         <View style={{ flex: 1, backgroundColor: '#6366f1cc' }} />

// //                     }

// //                     <View style={{
// //                         ...StyleSheet.absoluteFillObject,
// //                         justifyContent: 'center',
// //                         // alignItems: 'center',
// //                     }}>

// //                         <AnimatedCard
// //                             onPress={() => NavigationNextScreen('Dashboard')}
// //                             entering={FadeInLeft.duration(500).delay(200)}
// //                             style={[styles.SelectedStyle,]}
// //                         >
// //                             <Image
// //                                 style={{
// //                                     width: moderateScale(40),
// //                                     height: moderateScale(40),
// //                                     tintColor: '#fff'
// //                                 }}
// //                                 source={Images.USER}
// //                             />

// //                             <Text style={[styles.HeaderText]}>Dashbord</Text>
// //                         </AnimatedCard>
// //                     </View>
// //                 </View>

// //                 <View style={{
// //                     width: '90%',
// //                     height: 60,
// //                     alignSelf: 'center',
// //                     borderRadius: 12,
// //                     overflow: 'hidden',
// //                     borderLeftWidth: currentscreen == 'RoomsScreen' ? 5 : 0,
// //                     borderColor: currentscreen == 'RoomsScreen' ? Colors.WHITE : ""
// //                 }}>
// //                     {
// //                         currentscreen == 'RoomsScreen' &&
// //                         <View style={{ flex: 1, backgroundColor: '#6366f1cc' }} />

// //                     }
// //                     {/* <View style={{ flex: 1, backgroundColor: '#4f46e5cc' }} /> */}

// //                     <View style={{
// //                         ...StyleSheet.absoluteFillObject,
// //                         justifyContent: 'center',
// //                         // alignItems: 'center',
// //                     }}>
// //                         {/* Your AnimatedCard */}
// //                         <AnimatedCard
// //                             onPress={() => NavigationNextScreen('RoomsScreen')}
// //                             entering={FadeInLeft.duration(500).delay(200)}
// //                             style={styles.SelectedStyle}
// //                         >
// //                             <View
// //                                 style={{
// //                                     width: moderateScale(40),
// //                                     height: moderateScale(40),
// //                                     backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //                                     borderRadius: moderateScale(12),
// //                                     justifyContent: 'center',
// //                                     alignItems: 'center',
// //                                     marginRight: moderateScale(10),
// //                                 }}
// //                             >
// //                                 <Image
// //                                     style={{
// //                                         width: moderateScale(26),
// //                                         height: moderateScale(26),
// //                                         tintColor: '#fff'
// //                                     }}
// //                                     source={Images.ROOMTOTAL}
// //                                 />
// //                             </View>
// //                             <Text style={[styles.HeaderText]}>RoomsScreen</Text>
// //                         </AnimatedCard>
// //                     </View>
// //                 </View>

// //                 <View style={{
// //                     width: '90%',
// //                     height: 60,
// //                     alignSelf: 'center',
// //                     borderRadius: 12,
// //                     overflow: 'hidden',
// //                     borderLeftWidth: currentscreen == 'TenantScreen' ? 5 : 0,
// //                     borderColor: currentscreen == 'TenantScreen' ? Colors.WHITE : ""
// //                 }}>
// //                     {
// //                         currentscreen == 'TenantScreen' &&
// //                         <View style={{ flex: 1, backgroundColor: '#6366f1cc' }} />

// //                     }


// //                     <View style={{
// //                         ...StyleSheet.absoluteFillObject,
// //                         justifyContent: 'center',

// //                     }}>

// //                         <AnimatedCard
// //                             onPress={() => NavigationNextScreen('TenantScreen')}
// //                             entering={FadeInLeft.duration(500).delay(200)}
// //                             style={styles.SelectedStyle}
// //                         >
// //                             <View
// //                                 style={{
// //                                     width: moderateScale(40),
// //                                     height: moderateScale(40),
// //                                     backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //                                     borderRadius: moderateScale(12),
// //                                     justifyContent: 'center',
// //                                     alignItems: 'center',
// //                                     marginRight: moderateScale(10),
// //                                 }}
// //                             >
// //                                 <Image
// //                                     style={{
// //                                         width: moderateScale(26),
// //                                         height: moderateScale(26),
// //                                     }}
// //                                     source={Images.TENATES}
// //                                 /></View>
// //                             <Text style={[styles.HeaderText]}>Tenants</Text>
// //                         </AnimatedCard>
// //                         {/* Your AnimatedCard */}
// //                     </View>
// //                 </View>



// //                 <View style={{
// //                     width: '90%',
// //                     height: 60,
// //                     alignSelf: 'center',
// //                     borderRadius: 12,
// //                     overflow: 'hidden',
// //                     borderLeftWidth: currentscreen == 'Rent Management' ? 5 : 0,
// //                     borderColor: currentscreen == 'Rent Management' ? Colors.WHITE : ""
// //                 }}>
// //                     {
// //                         currentscreen == 'Rent Management' &&
// //                         <View style={{ flex: 1, backgroundColor: '#6366f1cc' }} />

// //                     }

// //                     <View style={{
// //                         ...StyleSheet.absoluteFillObject,
// //                         justifyContent: 'center',
// //                         // alignItems: 'center',
// //                     }}>
// //                         {/* Your AnimatedCard */}
// //                         <AnimatedCard
// //                             onPress={() => NavigationNextScreen('Rent Management')}
// //                             entering={FadeInLeft.duration(500).delay(200)}
// //                             style={styles.SelectedStyle}
// //                         >
// //                             <View
// //                                 style={{
// //                                     width: moderateScale(40),
// //                                     height: moderateScale(40),
// //                                     backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //                                     borderRadius: moderateScale(12),
// //                                     justifyContent: 'center',
// //                                     alignItems: 'center',
// //                                     marginRight: moderateScale(10),
// //                                 }}
// //                             >
// //                                 <Image
// //                                     style={{
// //                                         width: moderateScale(26),
// //                                         height: moderateScale(26),
// //                                         tintColor: '#fff'
// //                                     }}
// //                                     source={Images.RENT}
// //                                 /></View>
// //                             <Text style={[styles.HeaderText]}>Rent Management</Text>
// //                         </AnimatedCard>
// //                     </View>
// //                 </View>




// //             </Animated.View >
// //         </>
// //     )
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         width: widthPercentageToDP(80),
// //         height: heightPercentageToDP(87),
// //         backgroundColor: '#272C48',
// //         position: 'absolute',
// //         bottom: 0,
// //         zIndex: 500,
// //     },
// //     gradientBackground: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         padding: 16,
// //         borderRadius: 12,
// //     },
// //     header: {
// //         width: '100%',
// //         height: '10%',
// //         backgroundColor: 'lightgreen',
// //         justifyContent: 'center',
// //         paddingHorizontal: 20,
// //         paddingTop: 10
// //     },
// //     HederCenterStyle: {
// //         width: "90%",
// //         height: 60,
// //         paddingLeft: 20,
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         gap: moderateScale(6),
// //         padding: moderateScale(2),
// //         backgroundColor: 'rgba(255, 255, 255, 0.02)',
// //         alignSelf: 'center',
// //         marginVertical: moderateScale(10),
// //         borderRadius: moderateScale(16),
// //         borderWidth: 1,
// //         borderColor: '#ffffff0d'
// //         // shadowOffset: {
// //         //     width: 0,
// //         //     height: 0,
// //         // },
// //         // shadowOpacity: 0.17,
// //         // shadowRadius:1.27,
// //         // elevation: 1,
// //     },
// //     HeaderText: {
// //         fontSize: moderateScale(18),
// //         fontFamily: Fonts.POPPINS_SEMIBOLD,
// //         color: '#FFF',
// //         fontWeight: 700,
// //         zIndex: 1
// //     },
// //     HeaderTextSmall: {
// //         fontSize: moderateScale(14),
// //         fontFamily: Fonts.POPPINS_SEMIBOLD,
// //         color: '#A1AFF6',
// //     },
// //     SelectedStyle: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         gap: moderateScale(6),
// //         // padding: moderateScale(10),
// //         // backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //         marginHorizontal: moderateScale(20),
// //         marginVertical: moderateScale(10),
// //         borderRadius: moderateScale(16),
// //         opacity: moderateScale(0.3)
// //     },

// // })






// // // import { StyleSheet, Text, View } from 'react-native'
// // // import React from 'react'
// // // import { SafeAreaView } from 'react-native-safe-area-context'
// // // import { Colors } from '../utils/Theme'

// // // const DrawerNavigator = () => {


// // //     const [MyWidth, setMyWidth] = useState(Dimensions.get('window').width);

// // //     return (
// // //         <SafeAreaView style={styles.container}>
// // //             <Text>DrawerNavigator</Text>
// // //             <Text>DrawerNavigator</Text>
// // //             <Text>DrawerNavigator</Text>
// // //         </SafeAreaView>
// // //     )
// // // }

// // // export default DrawerNavigator

// // // const styles = StyleSheet.create({
// // //     container: {

// // //         backgroundColor: Colors.GUNMETAL,
// // //     },
// // // })


// // {/* <View style={styles.header}>
// //         <TouchableOpacity onPress={DrawerHandle}>
// //             <SimpleLineIcons name='menu' size={26} color={'white'}/>
// //         </TouchableOpacity>
// //     </View> */}

