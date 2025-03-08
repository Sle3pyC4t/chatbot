import { customProvider } from "ai";
import { deepseek } from '@ai-sdk/deepseek';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';


export const myProvider = customProvider({
  languageModels: {
    "chat-model-small": deepseek("deepseek-chat"),
    "chat-model-reasoning": deepseek("deepseek-reasoner"),
    "title-model": deepseek("deepseek-chat"),
    "artifact-model": deepseek("deepseek-chat"),
  },
  imageModels: {
    "small-model": deepseek("deepseek-chat"),
  },
});