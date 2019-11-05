import { createConfirmation } from 'react-confirm';
import Confirmation from '../components/Confirmation';

const defaultConfirmation = createConfirmation(Confirmation);

const confirm = (confirmation, options = {}) => defaultConfirmation({ confirmation, ...options });

export default confirm;