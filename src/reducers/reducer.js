import {
    STORE_QUESTIONS, fetchQuestions
} from '../actions/actions';

export const questionsReducer = (state = {}, action) => {
	switch(action.type) {

		case 'STORE_QUESTIONS':
			return {
				...state,
				fetchedQuestions: action.data
			}
		
		default:
			return state
	}
}