import React, { useState } from "react"
import { useCustomMutation } from "../hooks/useCustomMutation";
import { updateUser } from "../services/apiAuth";
import { useCustomQuery } from "../hooks/useCustomQuery";
import { getBookShelves } from "../services/apiSearch";
import { isNumeric } from "../utils/utils";

const GoogleBooksDetails: React.FC = ({location}) => {
  const [googleBooksId, setGoogleBooksId] = useState('');

  const { fetchStatus, error, refetch: refetchBookShelves } = useCustomQuery('bookShelves', () => getBookShelves(googleBooksId));
  const {mutate: updateUserInfo} = useCustomMutation('user', (id) => updateUser(id))

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!isNumeric(googleBooksId)) return;

    // Get current user info and current books ID.
    updateUserInfo(googleBooksId, {
      onSuccess: (data) => {
        refetchBookShelves().then(response => {
          if (response.isSuccess) {
            console.log('Refetch Book Shelves', response);
          } else {
            // If theres a failure revert books id on user to original value.
            console.log('Incorrect user ID!', response);
          }
        });
        // 102650048413333687594
      }
    });
  }

  return (
    <div>
      <h1>Google books details</h1>
      <p>You've signed in using your google account but we'll need extra information to link to your google books account.</p>
      <p>You will need to log into your google books account and get your account ID from the url</p>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="booksAccountId" onChange={e => setGoogleBooksId(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default GoogleBooksDetails;
