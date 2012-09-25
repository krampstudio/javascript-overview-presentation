Plan
=====

> _(Qui fait quoi)_
> **Nécessite un exemple**

1. Constat _(Jérôme)_
 * **Mettre directement un(des) exemple(s) de code pourri**
 * Côté serveur tout est ok, côté client c'est l'inverse:
     * Code intrusif
     * Code non testé
     * tout est chargé partout
     * Désorganisé
     * Non architecturé
 * Difficulté à maintenir, débugger, etc.
 * Les devs n'aiment pas JS
2. Retrospective _(Bertrand)_
 1. La théorie du barbu ! (est-ce la seule explication?)
 2. Le langage
      * Les moteurs
      * L'historique (timeline?)
      * Les spécificités (prototype, scope, closures, etc.)
      * JSON
 3. contre les idées reçues
    * Langague extensible (exemple de framework)
    * Rapiditié
    * etc.
3. Solutions _(Bertrand)_
    1. Cacher Javascript (GWT, DART, Coffescript, les lib serveur orientés composants - JSF, etc.)
    2. **Diving into Javascript!**                                                                  
4. Utiliser un framework pour faire de la bonne tambouille _(Jérôme)_
    * Présentation rapide de qq framework clients
    * jQuery
    * **Exemple d'utilisation (REuse the DOM)**
5. Organiser son code
    * **Pluginifier l'exemple précédent** _(Bertrand)_
    * **Structuration et chargement à la volée avec require.js** _(Bertrand)_
    * **Ajout d'un framework CSS (Less ou Sass)** _(Jérôme)_
6. Tester son code
    * **Exemple de test unitaire avec QUnit sur le code précédent** _(Bertrand)_
    * **Automatisation des tests avec phantom.js** _(Bertrand)_ 
    * **Exemple de debugging avec Firebug et/ou Chrome** _(Jérôme)_
7. Ingénieurie logicielle _(Bertrand)_
    * **Build avec grunt**
    * **Code quality: JSHint**
    * **Documentation avec jsdoc-toolkit**
8. Bonnes pratiques _(Jérôme)_
    1. Synatxe (cf. JSLint)
      * gestion des erreurs
      * use strict
      * pas de globales
      * nommer les functions anonymes
      * opérateur de vérité
    2. Utiliser les événements
    3.Utiliser les callbacks pour l'asynchrone
    4.Réfléchir en JS et non en OOP traditionnel
9. Javascript everywhere  _(Bertrand+Jérôme)_
    * des tonnes de libs (cf. mindmap)
    * js côté serveur avec Node.js
    * des projets surprenants (games, linux on the browser, pdf.js, popcorn.js, reveal.js, etc.)
