class Solution
{
public:
  int lengthOfLIS(vector<int> &nums)
  {
    const int size = nums.size();
    if (size < 1)
      return 0;
    int max_length = 1;
    // lengthOfLISEndAtI[i]存储了：以nums[i]结尾的LIS的长度。
    vector<int> lengthOfLISEndAtI(size, 1);

    for (int i = 1; i < size; i++)
    {
      // 当前扫描到的元素是nums[i]
      for (int j = 0; j < i; j++)
      {
        // 找出那些在nums[i]左边且比nums[i]小的元素
        if (nums[j] >= nums[i])
          continue;
        // 以nums[j]结尾的LIS与nums[i]组合，是否能产生更长的LIS（以nums[i]结尾）
        if (lengthOfLISEndAtI[i] < lengthOfLISEndAtI[j] + 1)
        {
          lengthOfLISEndAtI[i] = lengthOfLISEndAtI[j] + 1;
        }
      }
      // 以哪个元素结尾的LIS最长
      if (max_length < lengthOfLISEndAtI[i])
      {
        max_length = lengthOfLISEndAtI[i];
      }
    }
    return max_length;
  }
};
new Solution([2,11,4,12,6,1])