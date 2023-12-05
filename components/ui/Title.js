import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/colors'

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 30,
    // fontWeight: 'bold',
    color: Colors.primary800,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.primary800,
    padding: 4,
    maxWidth: '80%',
    width: 300
  }
})
