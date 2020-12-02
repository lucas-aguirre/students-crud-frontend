export default {
  setStudent(state, student) {
    state.student = student;
  },
  setStudents(state, students) {
    state.students = students;
  },
  openModalDeleteStudent(state) {
    state.modalDeleteStudent = true;
  },
  closeModalDeleteStudent(state) {
    state.modalDeleteStudent = false;
  },
  openSnackbar(state, values) {
    state.snackbarState = true;
    state.snackbarValues = values;
  },
  closeSnackbar(state) {
    state.snackbarState = false;
    state.snackbarValues = { message: null, color: 'success' };
  },
};
