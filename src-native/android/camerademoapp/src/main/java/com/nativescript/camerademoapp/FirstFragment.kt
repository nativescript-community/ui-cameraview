package com.nativescript.camerademoapp

import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.AdapterView
import android.widget.AdapterView.OnItemClickListener
import android.widget.ArrayAdapter
import androidx.activity.result.contract.ActivityResultContracts
import androidx.annotation.OptIn
import androidx.camera.camera2.interop.ExperimentalCamera2Interop
import androidx.camera.core.CameraSelector
import androidx.camera.core.ImageProxy
import androidx.camera.view.PreviewView
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.google.android.material.snackbar.Snackbar
import com.nativescript.camerademoapp.databinding.FragmentFirstBinding
import com.nativescript.cameraview.Camera
import com.nativescript.cameraview.CameraEventListener
import com.nativescript.cameraview.ImageAnalysis
import com.nativescript.cameraview.ImageAsyncProcessor
import org.json.JSONObject
import java.io.File
import java.lang.Exception

/**
 * A simple [Fragment] subclass as the default destination in the navigation.
 */
class FirstFragment : Fragment() {

    @ExperimentalCamera2Interop
//    private var backCameras: List<Camera>? = null
    private var photoTime: Long = 0
    private var _binding: FragmentFirstBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    private val requestPermissionLauncher =
        registerForActivityResult(
            ActivityResultContracts.RequestPermission()
        ) { isGranted: Boolean ->
            if (isGranted) {
                binding.cameraView.startPreview()
                Log.i("Permission: ", "Granted")
            } else {
                Log.i("Permission: ", "Denied")
            }
        }


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        _binding = FragmentFirstBinding.inflate(inflater, container, false)
        return binding.root

    }

    fun requestCameraPermission() {
        when {
            ContextCompat.checkSelfPermission(
                this.requireActivity(), android.Manifest.permission.CAMERA
            ) == PackageManager.PERMISSION_GRANTED -> {
//                layout.showSnackbar(
//                    view,
//                    "granted",
//                    Snackbar.LENGTH_INDEFINITE,
//                    null
//                ) {}
            }

            ActivityCompat.shouldShowRequestPermissionRationale(
                this.requireActivity(), android.Manifest.permission.CAMERA
            ) -> {
                view?.let {
                    Snackbar.make(it, "permission required", Snackbar.LENGTH_INDEFINITE)
                        .setAction("ok") {
                            requestPermissionLauncher.launch(
                                android.Manifest.permission.CAMERA
                            )
                        }.show()
                }
            }

            else -> {
                requestPermissionLauncher.launch(
                    android.Manifest.permission.CAMERA
                )
            }
        }

    }
    fun requestStoragePermission() {
        when {
            ContextCompat.checkSelfPermission(
                this.requireActivity(), android.Manifest.permission.WRITE_EXTERNAL_STORAGE
            ) == PackageManager.PERMISSION_GRANTED -> {
            }

            ActivityCompat.shouldShowRequestPermissionRationale(
                this.requireActivity(), android.Manifest.permission.WRITE_EXTERNAL_STORAGE
            ) -> {
                view?.let {
                    Snackbar.make(it, "permission required", Snackbar.LENGTH_INDEFINITE)
                        .setAction("ok") {
                            requestPermissionLauncher.launch(
                                android.Manifest.permission.WRITE_EXTERNAL_STORAGE
                            )
                        }.show()
                }
            }

            else -> {
                requestPermissionLauncher.launch(
                    android.Manifest.permission.WRITE_EXTERNAL_STORAGE
                )
            }
        }
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding.cameraView.position = CameraSelector.LENS_FACING_BACK
        binding.cameraView.aspectRatio = "4:3"
        binding.cameraView.scaleType = PreviewView.ScaleType.FIT_CENTER
        binding.cameraView.savePhotoToDisk = false
        binding.cameraView.listener = object : CameraEventListener {
            override fun onReady() {
                Log.d("CameraView","onReady")
            }

            @OptIn(ExperimentalCamera2Interop::class)
            override fun onCameraOpen() {
                val cameras = binding.cameraView.cameras
//                backCameras = cameras.filter { it.cameraFacing == binding.cameraView.position }
                val currentResolution = JSONObject(binding.cameraView.getCurrentResolutionInfo())
                Log.d("CameraView", "onCameraOpen $currentResolution")
                val resolutions = binding.cameraView.getAllAvailablePictureSizesJSON()
                val arrayAdapter = ArrayAdapter( this@FirstFragment.requireActivity(), R.layout.dropdown_item, resolutions.map {
                    it.getString("pictureSize")
                })
//                val arrayAdapter = ArrayAdapter<String>( this@FirstFragment.requireActivity(), R.layout.dropdown_item, backCameras!!.map{
//                    it.resolutions?.get(0) ?: it.cameraId
//                }.toList())
                binding.autoCompleteTextView.setAdapter(arrayAdapter)
                binding.autoCompleteTextView.setText(currentResolution.getString("pictureSize"))

                binding.autoCompleteTextView.onItemClickListener = object :OnItemClickListener {
                    override fun onItemClick(
                        parent: AdapterView<*>?,
                        view: View?,
                        position: Int,
                        id: Long
                    ) {
                        Log.d("CameraView", "onItemClick " + position + " " + resolutions!![position].toString())
                        binding.cameraView.pictureSize = resolutions!![position].getString("size")
                    }
                }
            }

            override fun onCameraClose() {
                Log.d("CameraView","onCameraClose")
            }

            override fun onCameraPhoto(file: File?) {
                Log.d("CameraView","onCameraPhoto: " + ((System.nanoTime()-photoTime)/1000000) + "ms" )
            }

            override fun onCameraPhotoImage(
                image: Bitmap?,
                info: androidx.camera.core.ImageInfo,
            ) {
                Log.d("CameraView","onCameraPhotoImage: " + ((System.nanoTime()-photoTime)/1000000) + "ms" )
            }

            override fun onCameraPhotoImageProxy(
                image: ImageProxy,
                processor: ImageAsyncProcessor
            ) {
                Log.d("CameraView","onCameraPhotoImageProxy: " + ((System.nanoTime()-photoTime)/1000000) + "ms" )
            }

            override fun onCameraVideo(file: File?) {
                Log.d("CameraView","onCameraVideo")
            }

            override fun onCameraAnalysis(analysis: ImageAnalysis) {
                Log.d("CameraView","onCameraAnalysis")
            }

            override fun onCameraError(message: String, ex: Exception) {
                Log.d("CameraView","onCameraError")
            }

            override fun onCameraVideoStart() {
                Log.d("CameraView","onCameraVideoStart")
            }

        }

        requestCameraPermission()
        requestStoragePermission()

        binding.fab.setOnClickListener { view ->
            photoTime = System.nanoTime()
            binding.cameraView.takePhoto("{\"savePhotoToDisk\":false}")
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}