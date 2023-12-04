// MentorSearchLogic.js

export const filterMentors = (mentors, searchQuery) => {
    return mentors.filter((mentor) =>
      Object.values(mentor).some(
        (value) =>
          typeof value === 'string' && value.toLowerCase().includes(searchQuery)
      )
    );
  };
  