import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

// Initial state
const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};

// Reducer function
function calculatorReducer(state, action) {
  switch (action.type) {
    case 'ADD_DIGIT':
      if (state.currentValue === '0' && action.payload === '0') {
        return state;
      }
      return {
        ...state,
        currentValue: state.currentValue === '0' ? action.payload : state.currentValue + action.payload,
      };
    
    case 'CHOOSE_OPERATOR':
      if (state.currentValue === '') {
        return state;
      }
      return {
        ...state,
        operator: action.payload,
        previousValue: state.currentValue,
        currentValue: '',
      };
    
    case 'CLEAR':
      return initialState;
    
    case 'EVALUATE':
      if (!state.operator || !state.previousValue) {
        return state;
      }
      const current = parseFloat(state.currentValue);
      const previous = parseFloat(state.previousValue);
      let computation = 0;

      switch (state.operator) {
        case '+':
          computation = previous + current;
          break;
        case '-':
          computation = previous - current;
          break;
        case '*':
          computation = previous * current;
          break;
        case '/':
          computation = previous / current;
          break;
        default:
          return state;
      }
      
      return {
        ...state,
        currentValue: computation.toString(),
        operator: null,
        previousValue: null,
      };
    
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{state.currentValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.acButton]} onPress={() => dispatch({ type: 'CLEAR' })}>
            <Text style={[styles.buttonText, styles.acButtonText]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => dispatch({ type: 'CHOOSE_OPERATOR', payload: '/' })}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => dispatch({ type: 'CHOOSE_OPERATOR', payload: '*' })}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => dispatch({ type: 'CHOOSE_OPERATOR', payload: '-' })}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '7' })}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '8' })}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '9' })}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => dispatch({ type: 'CHOOSE_OPERATOR', payload: '+' })}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '4' })}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '5' })}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '6' })}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '.' })}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '1' })}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '2' })}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '3' })}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ADD_DIGIT', payload: '0' })}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.equalsButton]} onPress={() => dispatch({ type: 'EVALUATE' })}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    backgroundColor: '#222',
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  display: {
    fontSize: 60,
    color: '#ffffff',
    textAlign: 'right',
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: '#3a3a3a',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#4e4e4e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  acButton: {
    backgroundColor: '#ff3b30',
  },
  acButtonText: {
    color: '#fff',
  },
  equalsButton: {
    backgroundColor: '#34c759',
  },
});
