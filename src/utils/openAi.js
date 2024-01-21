import OpenAI from 'openai';
import { CHATGPT_KEY } from './constants';

const openai = new OpenAI({
    apiKey: CHATGPT_KEY,
    dangerouslyAllowBrowser: true,
});

export default openai;