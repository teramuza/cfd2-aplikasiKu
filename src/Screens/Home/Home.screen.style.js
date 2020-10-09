import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2b2b2b',
    alignItems: 'flex-start'
  },
  banner: {
    width: '20%',
    height: 50,
    resizeMode: 'stretch',
  },
  content: {
    flex: 2,
    backgroundColor: '#6b6b6b',
  },
});

export {Styles};
