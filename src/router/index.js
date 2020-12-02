import Vue from 'vue';
import VueRouter from 'vue-router';

const Index = () => import(/* webpackChunkName: "Index" */ '@/views/Index');
const CreateStudent = () => import(/* webpackChunkName: "CreateStudent" */ '@/views/Students/CreateStudent');
const UpdateStudent = () => import(/* webpackChunkName: "UpdateStudent" */ '@/views/Students/UpdateStudent');

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Index',
  component: Index,
},
{
  path: '/students/new',
  name: 'create-student',
  component: CreateStudent,
},
{
  path: '/students/update/:academicRecord',
  name: 'update-student',
  component: UpdateStudent,
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
