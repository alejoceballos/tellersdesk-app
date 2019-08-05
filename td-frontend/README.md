# Tellers' Desk Frontend

## Basic Character Creation

- [ ] Create Character Sheet
  - [ ] Create Attributes Section
    - [X] Create Level Picker
    - [X] Create Attributes Group
    - [X] Apply "5/4/3" points rule on creation
    - [ ] Apply "1/2/?" costs per attribute
  - [ ] Create Skills Section
    - [ ] Create Mental Skills Section
    - [ ] Create Mental Physical Section
    - [ ] Create Mental Social Section
    - [ ] Apply "11/7/4 points" rule on creation
  - [ ] Create Merits Section
    - [ ] Apply "7 points" rule on creation
  - [ ] Apply "5th point costs 2 points" rule on creation for previous sections
  - [ ] Create Health Section
    - [ ] Create Box Selector
    - [ ] Apply Health rule on creation (Stamina + Size)
  - [ ] Create Willpower Section
    - [ ] Apply "Resolve + Composure" rule on creation
  - [ ] Create Morality Section
    - [ ] apply "Starting Morality = 7" rule
  - [ ] Apply Size rule (5 for adult human)
  - [ ] Apply Speed rule (Strength + Dexterity +5)
  - [ ] Apply Defense rule (Lowest of Dexterity or Wits)
  - [ ] Apply Initiative Mod rule (Dexterity +Composure)

## Character Combat

TBD

## Technicalities

### Creating the application

References:
- [Official site](https://facebook.github.io/create-react-app/ "Create React App")
- [Github](https://github.com/facebook/create-react-app "facebook/create-react-app")

```
npx create-react-app td-frontend
```

### Adding ESLint

See [Adding ESLint](../README.files/README.ESLint.md "Adding ESLint")


## IDE Settings

#### Stop "Unresolved function or method" issues 

Reference: 
- Lost it =(

Go to `File -> Settings -> Languages & Frameworks -> Libraries`:
- Click `Download` and a new Window with a list of frameworks will be displayed;
- Search for `jest`;
- Click `Download and Install`. When done the window will close;
- Click `Ok`;
