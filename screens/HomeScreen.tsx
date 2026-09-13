import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type User = {
  name: string;
  email: string;
  password: string;
};

type HomeScreenProps = {
  currentUser: User | null;
  onLogout: () => void;
};

export default function HomeScreen({ currentUser, onLogout }: HomeScreenProps) {
  return (
    <View style={styles.homeScreen}>
      <View style={styles.homeHeader}>
        <Text style={styles.eyebrow}>Panel</Text>
        <Text style={styles.homeTitle}>Bienvenido</Text>
        <Text style={styles.homeName}>{currentUser?.name ?? 'Usuario'}</Text>
      </View>

      <View style={styles.homeCard}>
        <Text style={styles.homeCardTitle}>Resumen</Text>
        <Text style={styles.homeCardText}>Has iniciado sesión correctamente.</Text>
        <Text style={styles.homeCardText}>Correo: {currentUser?.email}</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>klk ticher</Text>
          <Text style={styles.statLabel}>entrega2</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>en un BM mataron a 2pac</Text>
          <Text style={styles.statLabel}>los 4kt</Text>
        </View>
      </View>

      <Pressable style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.primaryButtonText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: '#ecfdf5',
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.12,
    shadowRadius: 22,
    elevation: 10,
  },
  homeHeader: {
    marginBottom: 20,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontWeight: '700',
    opacity: 0.8,
    marginBottom: 8,
    color: '#0f766e',
  },
  homeTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#064e3b',
  },
  homeName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f766e',
    marginTop: 8,
  },
  homeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#d1fae5',
    marginBottom: 18,
  },
  homeCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#064e3b',
    marginBottom: 10,
  },
  homeCardText: {
    color: '#374151',
    fontSize: 15,
    marginBottom: 6,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#dcfce7',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bbf7d0',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#14532d',
  },
  statLabel: {
    fontSize: 12,
    color: '#166534',
    fontWeight: '600',
    marginTop: 6,
  },
  logoutButton: {
    backgroundColor: '#0f766e',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
