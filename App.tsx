import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

type Screen = 'login' | 'register' | 'home';

type User = {
  name: string;
  email: string;
  password: string;
};

const defaultUsers: User[] = [
  {
    name: 'Usuario Demo',
    email: 'demo@correo.com',
    password: '123456',
  },
];

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [users, setUsers] = useState<User[]>(defaultUsers);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loginEmail, setLoginEmail] = useState('demo@correo.com');
  const [loginPassword, setLoginPassword] = useState('123456');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const switchScreen = (nextScreen: Screen) => {
    setErrorMessage('');
    setScreen(nextScreen);
  };

  const handleLogin = () => {
    const validUser = users.find(
      (user) =>
        user.email.trim().toLowerCase() === loginEmail.trim().toLowerCase() &&
        user.password === loginPassword,
    );

    if (!validUser) {
      setErrorMessage('Correo o contraseña incorrectos.');
      return;
    }

    setCurrentUser(validUser);
    setErrorMessage('');
    setScreen('home');
  };

  const handleRegister = () => {
    if (!registerName.trim() || !registerEmail.trim() || !registerPassword || !confirmPassword) {
      setErrorMessage('Completa todos los campos para continuar.');
      return;
    }

    if (registerPassword.length < 6) {
      setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (registerPassword !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    const userExists = users.some(
      (user) => user.email.trim().toLowerCase() === registerEmail.trim().toLowerCase(),
    );

    if (userExists) {
      setErrorMessage('Ya existe una cuenta con ese correo.');
      return;
    }

    const newUser: User = {
      name: registerName.trim(),
      email: registerEmail.trim(),
      password: registerPassword,
    };

    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    setErrorMessage('');
    setRegisterName('');
    setRegisterEmail('');
    setRegisterPassword('');
    setConfirmPassword('');
    setScreen('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setScreen('login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {screen === 'login' && (
            <LoginScreen
              loginEmail={loginEmail}
              loginPassword={loginPassword}
              errorMessage={errorMessage}
              onEmailChange={setLoginEmail}
              onPasswordChange={setLoginPassword}
              onLogin={handleLogin}
              onOpenRegister={() => switchScreen('register')}
            />
          )}

          {screen === 'register' && (
            <RegisterScreen
              registerName={registerName}
              registerEmail={registerEmail}
              registerPassword={registerPassword}
              confirmPassword={confirmPassword}
              errorMessage={errorMessage}
              onNameChange={setRegisterName}
              onEmailChange={setRegisterEmail}
              onPasswordChange={setRegisterPassword}
              onConfirmPasswordChange={setConfirmPassword}
              onRegister={handleRegister}
              onOpenLogin={() => switchScreen('login')}
            />
          )}

          {screen === 'home' && <HomeScreen currentUser={currentUser} onLogout={handleLogout} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#081a2f',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
