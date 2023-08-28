// Ajoutez ces imports en haut du fichier polyfills.ts
import * as stream from 'stream-browserify';
(window as any).Stream = stream; // Ajoutez le stream au contexte global

// ...

// Ajoutez ce polyfill pour le support d'IE11
(window as any).global = window;
