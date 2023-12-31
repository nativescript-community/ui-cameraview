# For more information about using CMake with Android Studio, read the
# documentation: https://d.android.com/studio/projects/add-native-code.html

# Sets the minimum version of CMake required to build the native library.

cmake_minimum_required(VERSION 3.4.1)

set(TARGET document_detector)
set(SRC_DIR ./)
set(OPENCV_LIB_DIR opencv/staticlibs/${ANDROID_ABI}/)
set(OPENCV_3RD_LIB_DIR opencv/3rdparty/libs/${ANDROID_ABI}/)

include_directories(opencv/include
                    ./include)


link_directories(${OPENCV_LIB_DIR}
                 ${OPENCV_3RD_LIB_DIR})


# Creates and names a library, sets it as either STATIC
# or SHARED, and provides the relative paths to its source code.
# You can define multiple libraries, and CMake builds them for you.
# Gradle automatically packages shared libraries with your APK.

aux_source_directory(${SRC_DIR} DIR_LIB_SOURCE)

add_library(${TARGET} SHARED ${DIR_LIB_SOURCE})

# Searches for a specified prebuilt library and stores the path as a
# variable. Because CMake includes system libraries in the search path by
# default, you only need to specify the name of the public NDK library
# you want to add. CMake verifies that the library exists before
# completing its build.

target_link_libraries(${TARGET} log jnigraphics z dl m)

# Specifies libraries CMake should link to your target library. You
# can link multiple libraries, such as libraries you define in this
# build script, prebuilt third-party libraries, or system libraries.

if(${ANDROID_ABI} STREQUAL x86_64)
    target_link_libraries(${TARGET} opencv_imgproc opencv_core cpufeatures libprotobuf ade tbb ittnotify libjpeg-turbo libwebp libpng libtiff libopenjp2 IlmImf quirc)
elseif(${ANDROID_ABI} STREQUAL x86)
        target_link_libraries(${TARGET} opencv_imgproc opencv_core cpufeatures libprotobuf ade tbb ittnotify libjpeg-turbo libwebp libpng libtiff libopenjp2 IlmImf quirc ippiw ippicv)
else()
    target_link_libraries(${TARGET} opencv_imgproc opencv_core cpufeatures libprotobuf ade tbb ittnotify libjpeg-turbo libwebp libpng libtiff libopenjp2 IlmImf quirc tegra_hal)
endif()

