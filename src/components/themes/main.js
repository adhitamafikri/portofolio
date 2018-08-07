import { primaryAccent, secondaryAccent, tertiaryAccent, quaternaryAccent } from '../variables'

export default {
  buttonPrimaryColor: 'white',

  headerTheme: {
    backgroundColor: primaryAccent,
    fontColor: 'white'
  },
  
  welcomeSectionTheme: {
    backgroundColor: primaryAccent,
    fontColor: 'white'
  },

  introSectionTheme: {
    backgroundColor: tertiaryAccent,
    fontColor: 'white'
  },

  BioSectionTheme: {
    backgroundColor: secondaryAccent,
    fontColor: 'white',
    tileColor: quaternaryAccent
  },

  SkillSectionTheme: {
    backgroundColor: tertiaryAccent,
    fontColor: 'white',
  },

  FooterTheme: {
    backgroundColor: 'black',
    fontColor: 'white',
  }
}