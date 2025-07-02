import {defineStore} from "pinia";
import {ref} from "vue";

export const useBreadcrumbStore = defineStore('breadcrumbStroe', ()=>{
  const breadcrumbList = ref([])
  const enable = ref(false)
  const setBreadcrumbList = (breadcrumb) => {
    breadcrumbList.value = breadcrumb
  }
  return {breadcrumbList, setBreadcrumbList, enable}
})
