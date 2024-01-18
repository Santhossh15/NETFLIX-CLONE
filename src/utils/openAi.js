import OpenAI from 'openai';
import { CHATGPT_KEY } from './constants';

const openai = new OpenAI({
    apiKey: CHATGPT_KEY,
    //client side
    dangerouslyAllowBrowser: true,
});

export default openai;