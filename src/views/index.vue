<template>
    <div>
        <BaseInfo></BaseInfo>
        <Skills></Skills>
        <WorkExperience></WorkExperience>
        <ProjectExprience></ProjectExprience>
        <EducationalBackground></EducationalBackground>
        <PersonalEvaluation></PersonalEvaluation>
    </div>
</template>

<script>
import BaseInfo from './BaseInfo';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import ProjectExprience from './ProjectExprience';
import EducationalBackground from './EducationalBackground';
import PersonalEvaluation from './PersonalEvaluation';
export default {
    components: {
        BaseInfo,
        Skills,
        WorkExperience,
        ProjectExprience,
        EducationalBackground,
        PersonalEvaluation,
    }
}
</script>

<style scoped>

</style>
