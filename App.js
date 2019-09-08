import React, {Component} from 'react';
import { TouchableOpacity, Text, View, Dimensions, StyleSheet, Vibration } from 'react-native';
import IRManager from 'react-native-ir-manager';

const width = Dimensions.get('screen').width / 3.3;
const height = Dimensions.get('screen').height / 8;

const styles = StyleSheet.create({
   button: {
       width,
       height,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 20,
       margin: 5
   },
    title: {
        color: 'white',
        fontSize: 20
    }
});

export default class App extends Component {

  _vibrate = () => {
      Vibration.vibrate(25);
  };

  _transmitProntoCode = async (prontoHexCode) => {
    this._vibrate();
    await IRManager.transmitProntoCode(prontoHexCode);
  };

  render() {

      const TOGGLE_ON_OFF = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const WHITE = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const MULTICOLOR = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const PROGRAM_1 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const PROGRAM_2 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const PROGRAM_3 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0016 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0041 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const PROGRAM_4 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const PROGRAM_5 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const RED = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const GREEN = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const BLUE = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const YELLOW = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0041 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0016 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const BLUE2 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const VIOLET = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0041 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0016 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const L1 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const L2 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const L3 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const L4 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';
      const L5 = '0000 006C 0022 0002 015B 00AD 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0041 0016 0016 0016 0041 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0016 0041 0016 0016 0016 0041 0016 0041 0016 0041 0016 05F7 015B 0057 0016 0E6C';

      return (
          <View style={{  flex: 1, backgroundColor: '#555' }}>
            <View style={{ height: 58, backgroundColor: '#444', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 26, color: 'white' }}>Jedi Led Strip</Text>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#222' }]} onPress={() => this._transmitProntoCode(TOGGLE_ON_OFF)}>
                    <Text style={styles.title}>On / Off</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#FFF' }]} onPress={() => this._transmitProntoCode(WHITE)}>
                    <Text style={[styles.title, { color: '#000' }]}>White</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#330f2f' }]} onPress={() => this._transmitProntoCode(MULTICOLOR)}>
                    <Text style={styles.title}>Multicolor</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#cb4636' }]} onPress={() => this._transmitProntoCode(PROGRAM_1)}>
                    <Text style={styles.title}>Program 1</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#b3b313' }]} onPress={() => this._transmitProntoCode(PROGRAM_2)}>
                    <Text style={styles.title}>Program 2</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#558972' }]} onPress={() => this._transmitProntoCode(PROGRAM_3)}>
                    <Text style={styles.title}>Program 3</Text>
                </TouchableOpacity>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#cb7b2b' }]} onPress={() => this._transmitProntoCode(PROGRAM_4)}>
                        <Text style={styles.title}>Program 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#57b54f' }]} onPress={() => this._transmitProntoCode(PROGRAM_5)}>
                        <Text style={styles.title}>Program 5</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#F00' }]} onPress={() => this._transmitProntoCode(RED)}>
                    <Text style={styles.title}>Red</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#0F0' }]} onPress={() => this._transmitProntoCode(GREEN)}>
                    <Text style={styles.title}>Green</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#00F' }]} onPress={() => this._transmitProntoCode(BLUE)}>
                    <Text style={styles.title}>Blue</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#fff400' }]} onPress={() => this._transmitProntoCode(YELLOW)}>
                    <Text style={styles.title}>Yellow</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#00e5ff' }]} onPress={() => this._transmitProntoCode(BLUE2)}>
                    <Text style={styles.title}>Blue</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#d55fff' }]} onPress={() => this._transmitProntoCode(VIOLET)}>
                    <Text style={styles.title}>Violet</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#222', width: width / 1.8 }]} onPress={() => this._transmitProntoCode(L1)}>
                    <Text style={styles.title}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#444', width: width / 1.8 }]} onPress={() => this._transmitProntoCode(L2)}>
                    <Text style={styles.title}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#666', width: width / 1.8 }]} onPress={() => this._transmitProntoCode(L3)}>
                    <Text style={styles.title}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#888', width: width / 1.8 }]} onPress={() => this._transmitProntoCode(L4)}>
                    <Text style={styles.title}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: '#AAA', width: width / 1.8 }]} onPress={() => this._transmitProntoCode(L5)}>
                    <Text style={styles.title}>5</Text>
                </TouchableOpacity>
            </View>
          </View>
      );
  }
}
