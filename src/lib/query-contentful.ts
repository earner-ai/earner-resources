export const lessonsQuery = `
{
	allContentfulLessonEN: allContentfulLesson(
		filter: { node_locale: { eq: "en-US" } }
	) {
		edges {
			node {
				slug
				id
			}
		}
	}

	allContentfulLessonFI: allContentfulLesson(
		filter: { node_locale: { eq: "fi-FI" } }
	) {
		edges {
			node {
				slug
				id
			}
		}
	}
}
`

export const habitsQuery = `
{
	allContentfulHabitEN: allContentfulHabit(filter: { node_locale: { eq: "en-US" } }) {
		edges {
			node {
				slug
				id
			}
		}
	}

	allContentfulHabitFI: allContentfulHabit(filter: { node_locale: { eq: "fi-FI" } }) {
		edges {
			node {
				slug
				id
			}
		}
	}
}
`

export const weeksQuery = `
{
	allContentfulWeekFI: allContentfulWeek(
		filter: { node_locale: { eq: "fi-FI" } }
	) {
		edges {
			node {
				id
				slug
			}
		}
	}

	allContentfulWeekEN: allContentfulWeek(
		filter: { node_locale: { eq: "en-US" } }
	) {
		edges {
			node {
				id
				slug
			}
		}
	}
}
`

export const questionnairesQuery = `
{
	allContentfulQuestionnaireEN: allContentfulQuestionnaire(
		filter: { node_locale: { eq: "en-US" } }
		sort: { fields: questions___id }
	) {
		edges {
			node {
				title
				id
			}
		}
	}

	allContentfulQuestionnaireFI: allContentfulQuestionnaire(
		filter: { node_locale: { eq: "fi-FI" } }
		sort: { fields: questions___id }
	) {
		edges {
			node {
				title
				id
			}
		}
	}
}
`
