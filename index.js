/* eslint-disable no-console */
const { course } = require('./src/courses/scriptCourse');
const { enrollment } = require('./src/enrollments/scriptEnrollments');
const { section } = require('./src/sections/scriptSection');
const { term } = require('./src/terms/scriptTerm');
const { user } = require('./src/users/scriptUser');
const { createZip } = require('./src/utils/scriptCreateZip');

const nexToCanvasImport = async () => {
  await course();
  await enrollment();
  await section();
  await term();
  await user();
  await createZip();
};

nexToCanvasImport();