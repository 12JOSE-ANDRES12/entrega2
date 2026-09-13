import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type RegisterScreenProps = {
  registerName: string;
  registerEmail: string;
  registerPassword: string;
  confirmPassword: string;
  errorMessage: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onRegister: () => void;
  onOpenLogin: () => void;
};

export default function RegisterScreen({
  registerName,
  registerEmail,
  registerPassword,
  confirmPassword,
  errorMessage,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onRegister,
  onOpenLogin,
}: RegisterScreenProps) {
  return (
    <View style={styles.registerScreen}>
      <View style={styles.registerHeader}>
        <Text style={styles.eyebrow}>Únete</Text>
        <Text style={styles.registerTitle}>Crear cuenta</Text>
        <Text style={styles.registerSubtitle}>Empieza tu experiencia hoy mismo</Text>
      </View>

      <View style={styles.registerCard}>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={registerName}
          onChangeText={onNameChange}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={registerEmail}
          onChangeText={onEmailChange}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={registerPassword}
          onChangeText={onPasswordChange}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChangeText={onConfirmPasswordChange}
          secureTextEntry
        />

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <Pressable style={styles.primaryButtonAccent} onPress={onRegister}>
          <Text style={styles.primaryButtonText}>Registrarse</Text>
        </Pressable>

        <Pressable style={styles.secondaryButtonAlt} onPress={onOpenLogin}>
          <Text style={styles.secondaryButtonTextAlt}>Ya tengo cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  registerScreen: {
    backgroundColor: '#f5f3ff',
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: '#c4b5fd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.14,
    shadowRadius: 22,
    elevation: 10,
  },
  registerHeader: {
    marginBottom: 22,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontWeight: '700',
    opacity: 0.8,
    marginBottom: 8,
    color: '#6d28d9',
  },
  registerTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#2e1065',
  },
  registerSubtitle: {
    fontSize: 15,
    color: '#6d28d9',
    marginTop: 8,
  },
  registerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd6fe',
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
  primaryButtonAccent: {
    backgroundColor: '#8b5cf6',
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
  secondaryButtonAlt: {
    backgroundColor: '#f3e8ff',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  secondaryButtonTextAlt: {
    color: '#6d28d9',
    fontSize: 16,
    fontWeight: '700',
  },
  errorText: {
    color: '#7c2d12',
    marginBottom: 12,
    fontSize: 14,
    textAlign: 'center',
  },
});
