import { Injector, Logger, webpack } from "replugged";
import { ApplicationCommandOptionType } from "replugged/types";
import { randChoice } from "./utils"
import { simpleText, simpleCode, getDiscordCode, simpleEmbeds } from "./values"

const inject = new Injector();
const logger = Logger.plugin("xyz.noplagi.slashes");

export async function start(): Promise<void> {
  inject.utils.registerSlashCommand({
    name: "wow-slash-simple",
    description: "Wow, it just prints text (or inline code)!",
    options: [{
      type: ApplicationCommandOptionType.Boolean,
      name: "inline",
      displayName: "Inline code",
      description: "Wow, inline code?",
      required: false
    }],
    executor(interaction) {
      try {
        const inline = interaction.getValue("inline", false)
        let rand = randChoice(simpleText);
        if (inline) rand = `\`${  rand  }\``
        return {
          send: false,
          result: rand
        }
      } catch (err) {
        logger.error(err as string);
        return {
          send: false,
          embeds: [
            {
              color: 0xdd2d2d,
              title: "Something went wrong, please try again later",
              description: err as string,
            },
          ],
        };
      }
    },
  })

  inject.utils.registerSlashCommand({
    name: "wow-slash-code",
    description: "Wow, it just prints code!",
    executor(interaction) {
      try {
        let rand = randChoice(simpleCode);
        return {
          send: false,
          result: getDiscordCode(rand)
        }
      } catch (err) {
        logger.error(err as string);
        return {
          send: false,
          embeds: [
            {
              color: 0xdd2d2d,
              title: "Something went wrong, please try again later",
              description: err as string,
            },
          ],
        };
      }
    },
  })

  inject.utils.registerSlashCommand({
    name: "wow-slash-embed",
    description: "Wow, it just prints embed!",
    executor(interaction) {
      try {
        let rand = randChoice(simpleEmbeds);
        return {
          send: false,
          embeds: [rand, ]
        }
      } catch (err) {
        logger.error(err as string);
        return {
          send: false,
          embeds: [
            {
              color: 0xdd2d2d,
              title: "Something went wrong, please try again later",
              description: err as string,
            },
          ],
        };
      }
    },
  })
}

export function stop(): void {
  inject.uninjectAll();
}
