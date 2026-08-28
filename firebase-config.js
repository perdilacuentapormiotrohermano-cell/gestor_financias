// ============================================================
// CONFIGURACIÓN DE FIREBASE — Sincronización entre dispositivos
// ============================================================
// 1. Creá un proyecto gratis en https://console.firebase.google.com
// 2. Dentro del proyecto: "Compilación" → "Authentication" → "Comenzar"
//    → pestaña "Sign-in method" → habilitá "Correo electrónico/contraseña"
// 3. "Compilación" → "Firestore Database" → "Crear base de datos"
//    → elegí "Modo de producción" y cualquier ubicación
// 4. En "Reglas" de Firestore, pegá esto y publicá:
//
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /users/{userId} {
//          allow read, write: if request.auth != null && request.auth.uid == userId;
//        }
//      }
//    }
//
// 5. Configuración del proyecto (ícono de tuerca) → "Tus apps" → ícono "</>"
//    (Agregar app web) → copiá el objeto "firebaseConfig" y pegalo abajo,
//    reemplazando los valores de ejemplo.
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDxBdTjNj44xgBA_P-lkwyr50rqZtSfi8w",
  authDomain: "gestor-de-finanzas-b138e.firebaseapp.com",
  projectId: "gestor-de-finanzas-b138e",
  storageBucket: "gestor-de-finanzas-b138e.firebasestorage.app",
  messagingSenderId: "214984393668",
  appId: "1:214984393668:web:936b80eb3dd87d08e11a91"
};

// No toques nada de acá para abajo.
if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "TU_API_KEY" && typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (e) {
    console.error('Error al inicializar Firebase:', e);
  }
}
