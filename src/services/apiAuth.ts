import supabase from "./supabase";

export async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
  
    if (error) {
      console.error('Error logging in with Google:', error);
    } else {
      console.log('Logged in user:', data);
    }
  }

export async function signOut() {
    const { error } = await supabase.auth.signOut()
}

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session) {
        console.log('User signed in:', session.user);
        // getBookShelves(session?.user.user_metadata.provider_id)
        updateUser('test ID');
    }
    if (event === 'SIGNED_OUT') {
        console.log('User signed out');
    }
});

export async function getLoggedInUser() {
    const {data: session} = await supabase.auth.getSession();

    if (!session.session) return {};

    const { data, error } = await supabase.auth.getUser();

    if(error) {
        throw new Error(error.message);
    }

    return data?.user;
}

export async function updateUser(googleBooksId: string) {
    let updateData;

    if (googleBooksId) updateData = {data: {googleBooksId}};

    const { data, error } = await supabase.auth.updateUser(updateData);

    if (error) {
        throw new Error(error.message)
    }

    return data;
}