import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    idUser: 1,
    nom: "ali",
    login: "ali@vg.com",
    password: "1234",
    role:"membre",
    comments: [
      {
        code_commentaire: 1,
        date_commentaire: "2022-12-07",
        texte_commentaire: "Sample comment",
        etat_commentaire: 1, 
        code_document: 1,
        login: "ali@vg.com",
      },
    ],
   
  },
  {
    idUser: 2,
    nom: "samira",
    login: "samira@vg.com",
    password: "1277",
    role:"moderateur",
    comments: [
      {
        code_commentaire: 2,
        date_commentaire: "2022-10-07",
        texte_commentaire: "good",
        etat_commentaire: 1, 
        code_document: 1,
        login: "samira@vg.com",
      },
    ],
    
  },
  {
    idUser: 3,
  nom: "mhrad",
  login: "mhrad@vg.com",
  password: "5559",
  role:"admin",
  comments: [
    {
      code_commentaire: 3,
      date_commentaire: "2022-09-07",
      texte_commentaire: "good",
      etat_commentaire: 1, 
      code_document: 1,
      login: "mhrad@vg.com",
    },
  ],
  
    
  },
  {
    idUser: 4,
    nom: "hind",
    login: "hind@vg.com",
    password: "12457",
    role:"membre",
    comments: [
      {
        code_commentaire: 4,
        date_commentaire: "2022-11-07",
        texte_commentaire: "exec",
        etat_commentaire: 1, 
        code_document: 1,
        login: "hind@vg.com",
      },
    ],
   
  },
];

const initialState = {
  users: users,
  user: {},
  status: "logout", // logout/valid/login
  blockedComments: [], // Add this field
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: {
      prepare(user, pwd) {
        return {
          payload: { user, pwd },
        };
      },
      reducer(state, action) {
        const user = state.users.find(
          (u) =>
            u.login === action.payload.user && u.password === action.payload.pwd
        );
        if (user) {
          state.user = user;
          state.role = user.role; // Store the user's role
          state.status = "valid";
        }
        return state;
      },
    },
    logout(state) {
      state.status = "logout";
      state.role = ""; // Clear the user's role on logout
    },
    addUser(state, action) {
      const InscUser = action.payload;
      const usersLength = state.users.filter(
        (u) => u.login === InscUser.login
      ).length;
      if (!usersLength) {
        state.users = [...state.users, InscUser];
      }
    },
    deleteUser(state, action) {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.idUser !== userId);
    },

    consultComments(state) {
      // Logic to fetch comments from the state
      // For example, if comments are stored in the users array
      // Assume comments have a property 'etat_commentaire' to indicate whether they are blocked (2) or not
      state.blockedComments = state.users.filter((comment) => comment.etat_commentaire === 2);
    },
    updateUserRole(state, action) {
      const { userId, newRole } = action.payload;
      state.users = state.users.map((user) =>
        user.idUser === userId ? { ...user, role: newRole } : user
      );
    },
   
    deleteSelectedComments(state, action) {
      const { selectedUser, selectedComments } = action.payload;

      const selectedUserId = state.users.find((user) => user.nom === selectedUser)?.idUser;

      if (selectedUserId) {
        state.users = state.users.map((user) =>
          user.idUser === selectedUserId
            ? {
                ...user,
                comments: user.comments.filter(
                  (comment) => !selectedComments.includes(comment.code_commentaire)
                ),
              }
            : user
        );

        // Clear the selected comments after deletion
        state.selectedComments = [];
      }
  
// ...


  // Rest of your code

    },
    updateUserPassword(state, action) {
      const { userId, newPassword } = action.payload;
      state.users = state.users.map((user) =>
        user.idUser === userId ? { ...user, password: newPassword } : user
      );
    },


    
    

    consultBlockedComments(state) {
      // Logique pour récupérer les commentaires bloqués depuis l'état
      // En supposant que la propriété 'etat_commentaire' est à l'intérieur du tableau 'comments'
      state.blockedComments = state.users.reduce((acc, user) => {
        const blockedUserComments = user.comments.filter(
          (comment) => comment.etat_commentaire === 2
        );
    
        if (blockedUserComments.length > 0) {
          acc.push({
            ...user,
            comments: blockedUserComments,
          });
        }
    
        return acc;
      }, []);
    },
    
    
    blockComment(state, action) {
      const commentId = action.payload.code_commentaire;

      state.users = state.users.map((user) => ({
        ...user,
        comments: user.comments.map((comment) =>
          comment.code_commentaire === commentId
            ? { ...comment, etat_commentaire: 2 }
            : comment
        )
      }));
      
    },
    
    unblockComment(state, action) {
      const commentId = action.payload.code_commentaire;
      state.users = state.users.map((user) => ({
        ...user,
        comments: user.comments.map((comment) =>
          comment.code_commentaire === commentId
            ? { ...comment, etat_commentaire: 1 }
            : comment
        ),
      }));
    },
    
  },
});

export const { login,updateUserPassword ,logout, deleteSelectedComments, updateUserRole,addUser,blockComment,unblockComment,consultBlockedComments,consultComments,deleteUser } = loginSlice.actions;

export default loginSlice.reducer;
