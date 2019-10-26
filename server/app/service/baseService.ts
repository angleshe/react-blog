import {Service} from 'egg'
import {ResponseMessageModel} from '../model/ResponseMessageModel';
/**
 * @description 服务基础抽象类,所有服务类必须继承实现该类
 * @author angle
 * @date 2019-10-25
 * @export
 * @abstract
 * @class BaseService
 * @extends {Service}
 * @template R 请求体类别
 * @template P 对外数据部分类型
 */
export abstract class BaseService <R, P = void> extends Service {
  /**
   * @description 请求体
   * @protected
   * @type {P}
   * @memberof BaseService
   */
  protected Parameter: P;
  /**
   * @description 结果集
   * @protected
   * @type {ResponseMessageModel<R>}
   * @memberof BaseService
   */
  protected Result: ResponseMessageModel<R>;
  /**
   * @description 业务方法,在子类实现,里面必须修改Result值
   * @author angle
   * @date 2019-10-25
   * @protected
   * @abstract
   * @returns {Promise<void>}
   * @memberof BaseService
   */
  protected abstract async ExecuteMethod(): Promise<void>;
  /**
   * @description 设置成功结果
   * @author angle
   * @date 2019-10-25
   * @protected
   * @param {R} data 数据结果
   * @param {string} [message='操作成功!'] 提示信息
   * @param {number} [code=1] code
   * @memberof BaseService
   */
  protected setSuccessResult (data: R, message: string = '操作成功!', code: number = 1): void {
    this.Result = {
      data,
      message,
      code
    }
  }
  /**
   * @description 设置错误结果
   * @author angle
   * @date 2019-10-25
   * @protected
   * @param {string} [message='服务器错误!'] 提示信息
   * @param {number} [code=0] code
   * @memberof BaseService
   */
  protected setErrorResult (message: string = '服务器错误!', code: number = 0): void {
    this.Result = {
      message,
      code
    }
  }
  /**
   * @description 执行服务,服务类对外暴露唯一方法
   * @author angle
   * @date 2019-10-25
   * @param {P} model 传入请求数据
   * @returns {Promise<ResponseMessageModel<R>>} 返回结果
   * @memberof BaseService
   */
  public async Execute(model: P): Promise<ResponseMessageModel<R>> {
    this.Parameter = model;
    try {
      await this.ExecuteMethod();
    } catch (e) {
      this.setErrorResult(e)
    }
    return this.Result
  }
}