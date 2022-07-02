import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        margin: 2,
        marginHorizontal: 18,
        //   borderRadius: 15,
        borderShadow: 1,
        backgroundColor: '#fff',
        //   borderBottomWidth: 1,
        //   borderColor: 'grey'
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 30,
    },
    badgeContainer: {
        backgroundColor: '#3872E9',
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        position: 'absolute',
        left: 45,
        top: 5,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    },
    rightContainer: {
        paddingLeft: 15,
        paddingRight: 10,
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    text: {
        color: 'grey',
        fontSize: 15,
    }
});

export default styles;
