import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        width: '100%',
        backgroundColor: themas.color.primary,
        height: Dimensions.get('window').height / 6,
        paddingHorizontal: 20,
        justifyContent: 'center',

    },

    title: {
        fontSize: 20,
        color: '#fff',
        marginTop: 5
    },
    boxInput: {
        width: '80%',
    },
    boxReport: {
        flex:1,
        width:'100%',
    },
    rowCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card:{
        width:'100%',
        minHeight:60,
        backgroundColor:'#FFF',
        marginTop:6,
        borderRadius:10,
        justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderColor:themas.color.lightGray
    },
    rowCardLeft:{
        width:'70%',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    reportTitle: {
        fontSize:16,
        fontWeight:'bold'
    },

    reportText: {
        color:themas.color.gray
    },
});