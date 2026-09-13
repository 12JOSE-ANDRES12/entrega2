import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type LoginScreenProps = {
  loginEmail: string;
  loginPassword: string;
  errorMessage: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onLogin: () => void;
  onOpenRegister: () => void;
};

export default function LoginScreen({
  loginEmail,
  loginPassword,
  errorMessage,
  onEmailChange,
  onPasswordChange,
  onLogin,
  onOpenRegister,
}: LoginScreenProps) {
  return (
    <View style={styles.loginScreen}>
      <View style={styles.loginHeader}>
        <Text style={styles.eyebrow}>Bienvenido</Text>
        <Text style={styles.loginTitle}>Iniciar sesión</Text>
        <Text style={styles.loginSubtitle}>Accede a tu espacio personal</Text>
      </View>

      <View style={styles.loginCard}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={loginEmail}
          onChangeText={onEmailChange}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={loginPassword}
          onChangeText={onPasswordChange}
          secureTextEntry
        />

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <Pressable style={styles.primaryButton} onPress={onLogin}>
          <Text style={styles.primaryButtonText}>Entrar</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={onOpenRegister}>
          <Text style={styles.secondaryButtonText}>Crear cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: '#0b132b',
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: '#1d4ed8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.25,
    shadowRadius: 22,
    elevation: 10,
  },
  loginHeader: {
    marginBottom: 22,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontWeight: '700',
    opacity: 0.8,
    marginBottom: 8,
    color: '#bfdbfe',
  },
  loginTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#f8fbff',
  },
  loginSubtitle: {
    fontSize: 15,
    color: '#bfdbfe',
    marginTop: 8,
  },
  loginCard: {
    backgroundColor: 'rgba(15, 23, 42, 0.72)',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1e3a8a',
  },
  input: {
    backgroundColor: '#f8fafc',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 13,
    marginBottom: 12,
    fontSize: 16,
    color: '#0f172a',
    borderWidth: 1,
    borderColor: '#dfe7f3',
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#dbeafe',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  secondaryButtonText: {
    color: '#1d4ed8',
    fontSize: 16,
    fontWeight: '700',
  },
  errorText: {
    color: '#fecaca',
    marginBottom: 12,
    fontSize: 14,
    textAlign: 'center',
  },
});
