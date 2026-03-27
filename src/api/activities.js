const API = import.meta.env.VITE_API;

/** Fetches an array of activities from the API. */
export async function getActivities() {
  try {
    const response = await fetch(API + "/activities");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}
/**Fetches an array of Routines from the API */
export async function getRoutines() {
  try {
    const response = await fetch(API + "/routines");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

/**
 * Sends a new activity to the API to be created.
 * A valid token is required.
 */
export async function createActivity(token, activity) {
  if (!token) {
    throw Error("You must be signed in to create an activity.");
  }

  const response = await fetch(API + "/activities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(activity),
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}/**Create a new routine  */
export async function createRoutine(token, routine) {
  if (!token) {
    throw Error("You must be signed in to create an activity.");
  }

  const response = await fetch(API + "/routines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(routine),
  });
  console.log(response);
  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}

/**
 * Sends a new routine to the API to be created.
 * A valid token is required.
 */

export async function deleteActivity(token, id) {
  if(!token){
    throw Error("You must be logged in to delete activities");
  }
  const response = await fetch(API + "/activities/" + id, {
    method: "DELETE",
    headers: {Authorization: "Bearer " + token },
  });
  if(!response.ok){
    const result = await response.json();
    throw Error(result.message);
  }
}
/**Delete a routine from the API */
export async function deleteRoutine(token, id) {
  if(!token){
    throw Error("You must be logged in to delete Routines");
  }
  const response = await fetch(API + "/routines/" + id, {
    method: "DELETE",
    headers: {Authorization: "Bearer " + token },
  });
  if(!response.ok){
    const result = await response.json();
    throw Error(result.message);
  }
}
/**Get a singular activity from the API */
export async function getAnActivity(id) {
  try {
    const response = await fetch(API + "/activities/" + id);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function addSets(token, set) {
  if (!token) {
    throw Error("You must be signed in to create an activity.");
  }

  const response = await fetch(API + "/sets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(set),
  });
  console.log(response);
  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}