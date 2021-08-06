import store from "@/store";
import axios from 'axios'
import { getModule, VuexModule, Module, Mutation, Action, MutationAction } from 'vuex-module-decorators'
@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true,
})
class User extends VuexModule {
  // public name: string = '';
  userData: any = '';
  // @Mutation
  // public setName(newName: string): void {
  //   this.name = newName
  // }
  @Mutation
  public setUserData(newData: any): void {
    this.userData = newData
  }
  // @Action
  // public updateName(newName: string): void {
  //   this.context.commit('setName', newName)
  // }
  @Action
  async getUseData(pagecount: number) {
    axios.get("https://reqres.in/api/users?per_page=" + pagecount).then((response) => {
      this.setUserData(response.data.data);
    })
  }
  @Action
  async getUseDataById(id: string) {
    axios.get("https://reqres.in/api/users/" + id).then((response) => {
      this.setUserData(response.data.data);
    })
  }
}

export default getModule(User);