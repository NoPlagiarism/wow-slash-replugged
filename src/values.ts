import { APIEmbed, MessageEmbedTypes } from 'replugged/types'

export const simpleText = ["Wow, it's a slash command", "https://youtu.be/dQw4w9WgXcQ", "What a twist?", "print(\"Hello, World!\")", "cat('Hello World')", "echo \"Hello World\";"]

export interface codeSample {
  language: string,
  code: string
}
export function getDiscordCode (code: codeSample): string {
  return `\`\`\`${code.language}\n${code.code}\n\`\`\``
}
export const simpleCode: codeSample[] = [
  // https://github.com/ShadiestGoat/replugged-cuteanimeboys/blob/main/src/settings/script.ts
  {language: "typescript", code: 'export const defaultSettings: Partial<Settings> = {\n  nsfwFilter: NSFWFilter.UNSET,\n};\n\nexport const cfg = await settings.init<Settings, keyof typeof defaultSettings>(\n  "eu.shadygoat.CuteAnimeBoys",\n  defaultSettings,\n);'},
  {language: "python", code: 'class Pepe:\n    NAME = "This Pepe Does Not Exists"\n    URL = "https://www.thispepedoesnotexist.co.uk/"\n\n    SET_SIZE: int = 9759\n    MIN_SEED: int = 1\n    SEED_LEN: int = 1\n    SOURCE_URL = "https://raw.githubusercontent.com/meesey/meesey.github.io/main/out/pepe%20({}).png"'},
  // https://codepen.io/kurtisfartsrainbows/pen/ZpmzOL
  {language: "html", code: '<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>Rick Roll</title>\n  </head>\n  <body>\n    <iframe id = "rick" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>\n    <div id="roll" onclick="roll()">\n      \n      Click me\n    \n    </div>\n  </body>\n</html>'},
  // VA-11 HALL-A
  {language: "json", code: '[\n    {\n        "line": 320,\n        "character": "Jill",\n        "type": "dialogue",\n        "text": "(I did hide all the dildos in the house \nthat night... only to find out she knew how \nto use a cucumber.)"\n    },\n    {\n        "line": 321,\n        "character": "Jill",\n        "type": "dialogue",\n        "text": "(And as a follow up, she used that same \ncucumber in a salad days later.)"\n    },\n    {\n        "line": 322,\n        "character": "Jill",\n        "type": "dialogue",\n        "text": "(She said, "so, do you like eating \nme for lunch?")"\n    }\n]'}
]

export const simpleEmbeds: APIEmbed[] = [
  // VA-11 HALL-A
  {
    type: MessageEmbedTypes.RICH,
    footer: {
      text: "Script script12.txt [▇▇▇▇——————] 268/699"
    },
    fields: [{
      name: "Jill",
      value: "First drink ever created on this \nsystem. Still a favorite of the people up \ntill today.",
      inline: false
    }]
  }
]
