var merge = function(nums1, m, nums2, n) {
        
        let p1 = m-1
        let p2 = n-1
        let p3 = m+n-1
        while(p3 != -1 && p2 != -1) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p3--] = nums1[p1--];
            } else {
                nums1[p3--] = nums2[p2--];
            }
        }

};