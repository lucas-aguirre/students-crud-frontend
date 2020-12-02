import axios from 'axios';

export default {
  findStudent({ commit }, payload) {
    try {
      if (!payload && payload.academicRecord) {
        throw new Error('O registro acadêmico é obrigatório');
      }

      commit('setStudent', null);

      axios
        .get(`http://localhost:3000/api/students/${payload.academicRecord}`)
        .then(({ data }) => {
          commit('setStudent', data.result);
        })
        .catch(({ response }) => {
          commit('openSnackbar', { message: response.data.message, color: 'error' });
        });
    } catch (error) {
      commit('openSnackbar', { message: error.message, color: 'error' });
    }
  },

  listStudents({ commit }, payload) {
    try {
      const students = [];
      let search = '';

      if (payload && payload.search) {
        search = `&search=${payload.search}`;
      }

      axios
        .get(`http://localhost:3000/api/students?${search}`)
        .then(({ data }) => {
          const { result } = data;

          result.forEach((student) => {
            students.push(student);
          });

          commit('setStudents', students);
        })
        .catch(({ response }) => {
          commit('openSnackbar', { message: response.data.message, color: 'error' });
        });
    } catch (error) {
      commit('openSnackbar', { message: error.message, color: 'error' });
    }
  },

  createStudent({ commit }, payload) {
    try {
      if (!payload) {
        throw new Error('Registro acadêmico não informado');
      }

      axios
        .post('http://localhost:3000/api/students', payload)
        .then(({ data }) => {
          commit('openSnackbar', { message: data.message, color: 'success' });
        })
        .catch(({ response }) => {
          commit('openSnackbar', { message: response.data.message, color: 'error' });
        });
    } catch (error) {
      commit('openSnackbar', { message: error.message, color: 'error' });
    }
  },

  updateStudent({ commit }, payload) {
    try {
      if (!payload || !payload.academicRecord) {
        throw new Error('Registro acadêmico não informado');
      }

      axios
        .put(`http://localhost:3000/api/students/${payload.academicRecord}`, payload)
        .then(() => {
          commit('openSnackbar', { message: 'Aluno atualizado com sucesso', color: 'success' });
        })
        .catch(({ response }) => {
          commit('openSnackbar', { message: response.data.message, color: 'error' });
        });
    } catch (error) {
      commit('openSnackbar', { message: error.message, color: 'error' });
    }
  },

  deleteStudent({ commit, dispatch }, payload) {
    try {
      if (!payload || !payload.academicRecord) {
        throw new Error('Registro acadêmico não informado');
      }

      axios
        .delete(`http://localhost:3000/api/students/${payload.academicRecord}`)
        .then(() => {
          commit('openSnackbar', { message: 'Aluno deletado com sucesso', color: 'success' });
          dispatch('listStudents');
        })
        .catch(({ response }) => {
          commit('openSnackbar', { message: response.data.message, color: 'error' });
        });
    } catch (error) {
      commit('openSnackbar', { message: error.message, color: 'error' });
    }
  },

  openModalDeleteStudent({ commit }) {
    commit('openModalDeleteStudent');
  },

  closeModalDeleteStudent({ commit }) {
    commit('closeModalDeleteStudent');
  },

  closeSnackbar({ commit }) {
    commit('closeSnackbar');
  },
};
