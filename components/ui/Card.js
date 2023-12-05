import { Dimensions, StyleSheet, View } from 'react-native'
import Colors from '../../constants/colors'

function Card({ children }) {
  return <View style={styles.card}>{children}</View>
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    borderRadius: 10,
    backgroundColor: Colors.primary800,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  }
})
