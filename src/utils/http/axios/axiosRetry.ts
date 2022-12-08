import { AxiosError, AxiosInstance } from 'axios';
/**
 *  request retry mechanism
 */

export class AxiosRetry {
  /**
   * Retry
   */
  retry(axiosInstance: AxiosInstance, error: AxiosError) {
    // @ts-ignore
    const { config } = error.response;
    const { waitTime, count } = config?.requestOptions?.retryRequest;
    config.__retryCount = config.__retryCount || 0;
    if (config.__retryCount >= count) {
      return Promise.reject(error);
    }
    config.__retryCount += 1;
    // After the request returns, the config header is incorrect and the retry request fails.
    // Delete the returned headers and use the default headers
    delete config.headers;
    return this.delay(waitTime).then(() => axiosInstance(config));
  }

  /**
   * Delay
   */
  private delay(waitTime: number) {
    return new Promise((resolve) => setTimeout(resolve, waitTime));
  }
}
