const path = require("path");

// Indique que cette configuration est la racine (empêche la recherche de configurations parentes)
module.exports = {
  root: true,
  
  // Fichiers ou dossiers ignorés par ESLint
  ignorePatterns: [
    "src/public/**/*", // Ignorer les fichiers dans le dossier "public"
    "dist/**/*",     // Ignorer le dossier de build
    "node_modules/**/*", // Ignorer les dépendances
    "*.js",           // Ignorer les fichiers JavaScript (on se focalise sur TypeScript)
    "*.cjs",
    "*.mjs",
    "*.d.ts", 
    "vite.config.ts",
    "coverage/**/*",
    ".angular/**/*"
  ],
  
  // Settings pour la résolution des imports
  settings: {
    'import/resolver': {
      typescript: {
        project: [
          path.join(__dirname, "tsconfig.app.json"),
          path.join(__dirname, "tsconfig.spec.json"),
          path.join(__dirname, "tsconfig.server.json")
        ]
      }
    }
  },
  
  // Configurations spécifiques pour différents types de fichiers
  overrides: [
    {
      // Configuration pour les fichiers TypeScript (.ts)
      files: ["*.ts"],
      
      // Utiliser le parser TypeScript pour analyser le code
      parser: "@typescript-eslint/parser",
      
      // Options du parser TypeScript
      parserOptions: {
        project: [
          "tsconfig.app.json",    // Configuration pour l'application
          "tsconfig.spec.json",   // Configuration pour les tests
          "tsconfig.server.json"  // Configuration pour le serveur SSR
        ],
        tsconfigRootDir: __dirname,
        sourceType: "module", 
        ecmaVersion: 2022
      },
      
      // Plugins ESLint utilisés
      plugins: [
        "@typescript-eslint",    // Règles spécifiques à TypeScript
        "@angular-eslint",        // Règles spécifiques à Angular
        "prettier",    // Intégration Prettier
        "import"       // Gestion des imports
      ],
      
      // Configurations étendues (héritage des règles)
      extends: [
        "eslint:recommended",                           // Règles de base recommandées par ESLint
        "plugin:@typescript-eslint/recommended",        // Règles recommandées pour TypeScript
        "plugin:@angular-eslint/recommended",           // Règles recommandées pour Angular
        "plugin:@angular-eslint/template/process-inline-templates", // Traitement des templates inline
        "plugin:@typescript-eslint/recommended-requiring-type-checking", // Règles avec vérification de type
        "plugin:prettier/recommended",  // Intègre Prettier
        "plugin:import/recommended",    // Règles d'import
        "plugin:import/typescript"      // Support TypeScript
      ],
      
      // Règles personnalisées (surcharge des règles étendues)
      rules: {
        // === RÈGLES ANGULAR ===
        // Règle : Suffixe des classes de composants Angular
        "@angular-eslint/component-class-suffix": [
          "error", // Niveau d'erreur
          {
            "suffixes": ["Component", "Page", "Dialog"] // Suffixes autorisés
            /*"require": {
              "changeDetection": "ChangeDetectionStrategy.OnPush" // Exige OnPush pour les performances
            }*/
          }
        ],
        
        // Règle : Sélecteur des directives Angular
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",    // Les directives doivent être des attributs
            "prefix": ["app", "lib"], // Préfixes autorisés (application et librairie)
            "style": "camelCase"    // Style camelCase pour les attributs
          }
        ],
        
        // Règle : Sélecteur des composants Angular
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",      // Les composants doivent être des éléments
            "prefix": ["app", "lib"], // Préfixes autorisés
            "style": "kebab-case"   // Style kebab-case pour les éléments
          }
        ],
        
        // Règle Angular : Interdire les méthodes de cycle de vie vides
        "@angular-eslint/no-empty-lifecycle-method": "error",
        
        // Règle Angular : Interdire les outputs avec des noms natifs
        "@angular-eslint/no-output-native": "error",
        
        // Règles Angular supplémentaires
        "@angular-eslint/use-injectable-provided-in": "off",
        "@angular-eslint/prefer-standalone": "warn",
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-output-rename": "error",
        
        // === RÈGLES TYPESCRIPT ===
        // Règle : Variables déclarées mais non utilisées
        "@typescript-eslint/no-unused-vars": [
          "warn", // Warning plutôt qu'erreur
          {
            "argsIgnorePattern": "^_",      // Ignorer les arguments commençant par _
            "varsIgnorePattern": "^_",      // Ignorer les variables commençant par _
            "caughtErrorsIgnorePattern": "^_" // Ignorer les erreurs attrapées commençant par _
          }
        ],
        
        // Règle : Interdire le type 'any' (avertissement seulement)
        "@typescript-eslint/no-explicit-any": "warn",
        
        // Règle : Exiger un type de retour explicite pour les fonctions
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            "allowExpressions": true,               // Autoriser les expressions sans type
            "allowHigherOrderFunctions": true,      // Autoriser les fonctions d'ordre supérieur
            "allowTypedFunctionExpressions": true   // Autoriser les expressions fonctionnelles typées
          }
        ],
        
        // Règle : Préférer les interfaces aux types
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        
        // Règle : Préférer le chaînage optionnel
        "@typescript-eslint/prefer-optional-chain": "warn",
        
        // Règle : Éviter les assertions de type inutiles
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        
        // Règles TypeScript supplémentaires pour la sécurité
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        
        // Règle : Ordonner les imports
        "@typescript-eslint/consistent-type-imports": "off",

        // Désactivé car TypeScript gère lui-même la vérification des exports nommés.
        // La règle import/named génère des faux positifs sur les `export type` d'Angular (ex: OnInit, WritableSignal).
        "import/named": "off",
        
        // Règle : Préférer les interfaces exportées
        "@typescript-eslint/consistent-type-exports": "warn",
        
        // === RÈGLES D'IMPORT OBLIGATOIRES ===
        // Règle : Forcer les imports avec alias et interdire les relatifs
        "@typescript-eslint/no-restricted-imports": [
          "error",
          {
            "paths": [
              {
                "name": ".",
                "message": "Utilise @app/ pour les imports locaux au lieu de '.'"
              },
              {
                "name": "..",
                "message": "Utilise @app/ pour les imports locaux au lieu de '..'"
              },
              {
                "name": "./*",
                "message": "Utilise @app/* pour les imports locaux au lieu de './*'"
              },
              {
                "name": "../*",
                "message": "Utilise @app/* pour les imports locaux au lieu de '../*'"
              },
              {
                "name": "../../*",
                "message": "Utilise @app/* pour les imports locaux au lieu de '../../*'"
              },
              {
                "name": "../../../*",
                "message": "Utilise @app/* pour les imports locaux au lieu de '../../../*'"
              }
            ],
            "patterns": [
              {
                "group": ["../**"],
                "message": "Interdit: utilise les alias (@app/, @assets/, @env/) au lieu des imports parent relatifs"
              },
              {
                "group": ["src/app/*"],
                "message": "Utilise @app/* au lieu de src/app/*"
              },
              {
                "group": ["src/*"],
                "message": "Utilise les alias (@app/, @env/, etc.) au lieu de chemins absolus"
              }
            ]
          }
        ],
        
        // Règle : Organisation stricte des imports
        "import/order": [
          "error",
          {
            "groups": [
              "builtin",      // Built-in types (fs, path, etc.)
              "external",     // External packages (@angular, rxjs, etc.)
              "internal",     // Internal aliases (@app, @shared, etc.)
              "parent",       // Parent imports
              "sibling",      // Sibling imports
              "index",        // Index imports
              "object",       // Object imports
              "type"          // Type imports
            ],
            "pathGroups": [
              {
                "pattern": "@angular/**",
                "group": "external",
                "position": "before"
              },
              {
                "pattern": "@app/_core/z-shares-confgs/**",
                "group": "external",
                "position": "before"
              },
              {
                "pattern": "rxjs",
                "group": "external",
                "position": "after"
              },
              {
                "pattern": "rxjs/**",
                "group": "external",
                "position": "after"
              },
              {
                "pattern": "ngx-toastr",
                "group": "external",
                "position": "after"
              },
              {
                "pattern": "ngx-/**",
                "group": "external",
                "position": "after"
              },
              {
                "pattern": "@app/_core/**",
                "group": "internal",
                "position": "after"
              },
              {
                "pattern": "@env/**",
                "group": "internal",
                "position": "after"
              },
              {
                "pattern": "@assets/**",
                "group": "internal",
                "position": "after"
              },
              {
                "pattern": "@app/_pages/**",
                "group": "internal",
                "position": "after"
              },
              {
                "pattern": "@app/**",
                "group": "internal",
              },
            ],
            "pathGroupsExcludedImportTypes": ["builtin"],
            "newlines-between": "always-and-inside-groups",
            "alphabetize": {
              "order": "ignore",
              "caseInsensitive": true
            }
          }
        ],
        
        // Règles d'import de base
        //"import/no-unresolved": "error",
        // "import/named" désactivé globalement plus haut : faux positifs sur export type Angular
        "import/namespace": "error",
        "import/default": "error",
        "import/export": "error",
        "import/no-duplicates": "error",
        "import/no-cycle": "error",
        // Note: import/no-relative-parent-imports disabled because it incorrectly flags @app/* aliased paths.
        // The @typescript-eslint/no-restricted-imports rule above already enforces alias usage.
        "import/no-relative-parent-imports": "off",
        
        // === RÈGLES GÉNÉRALES ===
        // Règle : Utilisation de console (limité aux méthodes autorisées)
        "no-console": [
          "warn",
          {
            "allow": ["warn", "error", "info", "clear", "debug"] // Méthodes console autorisées
          }
        ],
        
        // Règle : Préférer const pour les variables non modifiées
        "prefer-const": "error",
        
        // Règle : Interdire var (utiliser let ou const)
        "no-var": "error",
        
        // Règle : Exiger l'égalité stricte (=== et !==)
        "eqeqeq": ["error", "smart"], // 'smart' permet certaines comparaisons null/undefined
        
        // Règle : Retours cohérents dans les fonctions
        "consistent-return": "error",
        
        // === RÈGLE PRETTIER ===
        "prettier/prettier": [
          "error",
          {
            "endOfLine": "auto"
          }
        ]
      }
    },
    {
      // Configuration pour les fichiers HTML (templates Angular)
      "files": ["*.html"],
      
      // Parser spécifique pour les templates Angular
      "parser": "@angular-eslint/template-parser",
      
      // Plugins pour les templates
      "plugins": ["@angular-eslint/template"],
      
      // Configurations étendues pour les templates
      "extends": [
        "plugin:@angular-eslint/template/recommended", // Meilleures pratiques templates
        "plugin:@angular-eslint/template/accessibility" // Accessibilité
      ],
      
      // Règles spécifiques aux templates
      "rules": {
        // Règle : Les événements click doivent avoir des équivalents clavier
        "@angular-eslint/template/click-events-have-key-events": "warn",
        
        // Règle : Interdire les bindings asynchrones négatifs
        "@angular-eslint/template/no-negated-async": "error",
        
        // Règle : Les labels doivent avoir un contrôle associé (désactivé car trop strict)
        "@angular-eslint/template/accessibility-label-has-associated-control": "off",

        // Règle : valider les attributs ARIA dans les templates
        "@angular-eslint/template/accessibility-valid-aria": "off"//error

        //"@angular-eslint/use-component-change-detection-strategy": ["error", "OnPush"]

        // Utiliser plutôt ces règles générales d'accessibilité :
        //"@angular-eslint/template/accessibility": "warn"

        // Règle : Bonnes pratiques pour les attributs ARIA
        //"@angular-eslint/template/accessibility-aria": "warn",
        //"@angular-eslint/template/accessibility-aria-attributes": "warn",
        
        // Règle : Images doivent avoir un alt text
        //"@angular-eslint/template/accessibility-alt-text": "warn"

        //"@angular-eslint/template/accessibility-table-scope": "warn"
      }
    }
  ]
};