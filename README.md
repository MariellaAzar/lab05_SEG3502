# SEG3502 — Laboratoire 5 — Code de départ

Ce dossier contient l'application **Employee** de départ pour le laboratoire 5.

## Démarrage

Dans un terminal ouvert à la racine du projet :

```bash
npm install
npm start
```

Puis ouvrez l'application à l'adresse indiquée par Angular, normalement :

```text
http://localhost:4200/
```

## Firebase / AngularFire

Ce projet utilise **Angular 18**. Pour ce laboratoire, utilisez la version AngularFire compatible avec cette version d'Angular :

```bash
ng add @angular/fire@18.0.1
```

Pendant la configuration, sélectionnez **Firestore** et votre propre projet Firebase.

> N'utilisez pas simplement `ng add @angular/fire` sans version : la version la plus récente d'AngularFire peut cibler une version plus récente d'Angular que celle utilisée par ce starter.

## Point de départ

Le projet contient déjà :

- le formulaire **Employee Entry Form** ;
- le modèle `Employee` ;
- le bouton **Employee List** ;
- le tableau d'affichage des employés ;
- un `EmployeeService` qui garde actuellement les employés seulement en mémoire.

Le travail du laboratoire consiste à remplacer/étendre cette persistance en mémoire avec **Cloud Firestore**, conformément aux consignes du laboratoire.

## Important

Utilisez votre propre configuration Firebase. Ne partagez pas les paramètres ou fichiers d'un autre projet Firebase.

---

## Ce qui a été implémenté (Firestore)

- `EmployeeService` utilise maintenant **Cloud Firestore** (collection `employees`) au lieu d'un `BehaviorSubject` en mémoire :
  - `addEmployee()` ajoute un document avec `addDoc` et retourne une `Promise`;
  - `$` retourne un `Observable` (`collectionData`) de tous les employés, la date de naissance (`Timestamp`) étant reconvertie en `Date`.
- `EmployeeComponent` n'efface le formulaire et ne navigue vers « Employee List » qu'une fois l'écriture réussie (message d'erreur sinon).
- `EmployeesComponent` affiche les employés lus depuis Firestore (tableau inchangé).
- `app.config.ts` fournit `provideFirebaseApp` et `provideFirestore`; la configuration est dans `src/environments/environment.ts`.

## Configuration à faire avant d'exécuter

1. Console Firebase : créer un projet, **Firestore Database > Create database > Start in test mode**, puis une **application Web** (Project settings).
2. Copier les valeurs de configuration de VOTRE application Web dans `src/environments/environment.ts` (et `environment.development.ts`).
3. `npm install` puis `npm start`, ouvrir http://localhost:4200/.
4. Ajouter un employé, cliquer sur **Employee List**, puis rafraîchir la page : les employés doivent toujours être là (vérifiable aussi dans la console Firebase, collection `employees`).
