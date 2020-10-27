import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2b2b2b',
    alignItems: 'flex-start',
  },
  banner: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  content: {
    flex: 2,
    backgroundColor: '#e2e2e2',
    paddingVertical: 15,
  },
  flatlistCard: {
    paddingStart: 18,
  },
  card: {
    width: 220,
    height: 170,
    marginHorizontal: 5,
    backgroundColor: '#fbfbfb',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1,
  },
  cardBanner: {
    width: '100%',
    height: 100,
    resizeMode: 'stretch',
  },
  contentText: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  textCardTitle: {
    fontWeight: 'bold',
  },
  textCard: {
    color: '#434343',
  },
});

export {Styles};
